import { ReviewFormPropsType } from "./ReviewForm.props";
import styles from "./ReviewForm.module.css";
import cn from "classnames";
import { Input } from "../Input/Input";
import { Rating } from "../Rating/Rating";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import CloseIcon from "./close.svg";
import { useForm, Controller } from "react-hook-form";
import { IReviewForm, IReviewSentResponse } from "./IReviewForm";
import axios from "axios";
import { API } from "../../helpers/api";
import { useState, KeyboardEvent } from "react";

export const ReviewForm = ({productId, className, isOpened, ...props}:ReviewFormPropsType):JSX.Element => {

    const { register, control, handleSubmit, formState: {errors}, reset, clearErrors } = useForm<IReviewForm>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string>(); 

    const onSubmit = async(formData:IReviewForm) => {
        try {
            const { data } = await axios.post<IReviewSentResponse>(API.review.creatDemo, {...formData, productId});
            if(data.message) {
                setIsSuccess(true);
                reset();
            } else {
                setError('Что-то пошло не так');
            }
        } catch(e) {
            setError('Что-то пошло не так, обновите страницу');
        } 
    };

    const setIsSuccessFalse = (key:KeyboardEvent) => {
        if(key.code == 'Enter') {
            setIsSuccess(false);
        }
    };

    const setErrorUndefined = (key:KeyboardEvent) => {
        if(key.code == 'Enter') {
            setError(undefined);
        }
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
     <div className={cn(styles.reviewFrom, className)} {...props}>
        <Input {...register('name', {required: {value: true, message: "Заполните имя"}})} 
        tabIndex={isOpened ? 0 : -1}
        placeholder='Имя' 
        error={errors.name}
        aria-invalid={errors.name ? true : false}/>
        <Input {...register('title', {required: {value: true, message: "Заполните заголовок"}})} 
        tabIndex={isOpened ? 0 : -1}
        placeholder='Заголовок отзыва' 
        className={styles.title}
        error={errors.title}
        aria-invalid={errors.title ? true : false}/>
        <div className={styles.rating}>
            <span>Оценка:</span>
            <Controller 
            control={control}
            name='rating'
            rules={{required: {value: true, message: "Укажите рейтинг"}}}
            render={({ field }) => {
                return <Rating tabIndex={isOpened ? 0 : -1} isEditable ref={field.ref} rating={field.value} setRating={field.onChange} error={errors.rating}/>;
            }}
            />
        </div>
        <Textarea {...register('description', {required: {value: true, message: "Введите ваш комментарий"}})} 
        tabIndex={isOpened ? 0 : -1}
        placeholder='Текст отзыва' 
        className={styles.description}
        aria-label={'Оставьте отзыв'}
        error={errors.description}
        aria-invalid={errors.description ? true : false}/>
        <div className={styles.submit}>
            <Button appearance='primary'
            tabIndex={isOpened ? 0 : -1}
            onClick={() => clearErrors()}
            >Отправить</Button>
            <span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
    </div>
    {isSuccess && <div role='alert' tabIndex={0} className={cn(styles.success, styles.panel)}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>
            Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <CloseIcon aria-label='закрыть оповещение' className={styles.close} tabIndex={0} onKeyDown={(key:KeyboardEvent) => setIsSuccessFalse(key)} onClick={() => setIsSuccess(false)}/>
    </div>}
    {error && <div role='alert' tabIndex={0} className={cn(styles.error, styles.panel)}>
        Что-то пошло не так, обновите страницу
        <CloseIcon aria-label='закрыть оповещение' className={styles.close} tabIndex={0} onKeyDown={(key:KeyboardEvent) => setErrorUndefined(key)} onClick={() => setError(undefined)}/>
    </div>}
    </form>;
};