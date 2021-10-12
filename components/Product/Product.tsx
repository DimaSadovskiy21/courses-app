import { Card } from "../Card/Card";
import { ProductPropsType } from "./Product.props";
import styles from "./Product.module.css";
import { Rating } from "../Rating/Rating";
import { Tag } from "../Tag/Tag";
import { Button } from "../Button/Button";
import { declOfNum, priceRu } from "../../helpers/helpers";
import { Divider } from "../Divider/Divider"; 
import { ForwardedRef, forwardRef, useRef, useState } from "react";
import { Review } from "../Review/Review";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { motion } from "framer-motion";


export const Product = motion(forwardRef(({ product, className, ...props }: ProductPropsType, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

    const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
    const reviewRef = useRef<HTMLDivElement>(null);
    const scrollToReview = () => {
        setIsReviewOpened(true);
        reviewRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        reviewRef.current?.focus();
    };

    const variants = {
        visible: {opacity: 1, height: 'auto'},
        hidden: {opacity: 0, height: 0},
    };
 
    return <div className={className} {...props} ref={ref} >
    <Card className={styles.product} >
        <div  className={styles.logo}>
            <img tabIndex={0} src={process.env.NEXT_PUBLIC_DOMAIN + product.image} 
            alt={product.title}
            width={70}
            height={70}
            />
            </div>
        <div tabIndex={0} className={styles.title}>{product.title}</div>
        <div className={styles.price}>
            <span tabIndex={0}><span className={styles.visialyHidden}>цена</span>{priceRu(product.price)}</span>
            {product.oldPrice && <Tag className={styles.oldPrice} size='small' color='green'><span className={styles.visialyHidden}>скидка</span>{priceRu(product.price - product.oldPrice)}</Tag>}
        </div>
        <div className={styles.credit}>
            <span tabIndex={0}><span className={styles.visialyHidden}>кредит</span>{priceRu(product.credit)}</span>
            <span className={styles.month}>/мес</span>
        </div>
        <div className={styles.rating}>
        <span tabIndex={0}><span className={styles.visialyHidden}>{'рейтинг' + (product.reviewAvg ?? product.initialRating)}</span><Rating rating={product.reviewAvg ?? product.initialRating} /></span>
            </div>
        <div className={styles.tags}>{product.tags.map(t => <Tag tabIndex={0} className={styles.tag} size='small' color='ghost' key={t}>{t}</Tag>)}</div>
        <div aria-hidden={true} className={styles.priceTitle}>цена</div>
        <div aria-hidden={true} className={styles.creditTitle}>в кредит</div>
        <div className={styles.reviewCount}><a href='#ref' onClick={scrollToReview}>{product.reviewCount} {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}</a></div>
        <Divider className={styles.hr}/>
        <div tabIndex={0} className={styles.description}>{product.description}</div>
        <div tabIndex={0} className={styles.feature}>
        {product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
        </div>
        <div tabIndex={0} className={styles.advBlock}>
            {product.advantages && <div className={styles.advantages}>
                <div className={styles.advTitle}>Преимущества</div>
                <div>{product.advantages}</div>
            </div>}
             {product.disadvantages && <div className={styles.disadvantages}>
                <div className={styles.advTitle}>Недостатки</div>
                <div>{product.disadvantages}</div>
            </div>}
        </div>
        <Divider className={styles.hr2}/>
        <div className={styles.action}>
            <Button appearance='primary'>Узнать подробнее</Button>
            <Button className={styles.leftButton}
             appearance='ghost'
              arrow={isReviewOpened ? 'down' : 'right'}
              onClick={() => setIsReviewOpened(!isReviewOpened)} 
              aria-expanded={isReviewOpened}             
              >Читать отзывы</Button>
        </div>
    </Card>
    <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial='hidden'>
    <Card color='blue' className={styles.reviews} ref={reviewRef} tabIndex={0}>
        {product.reviews.map(r => (
            <div key={r._id}>
            <Review review={r} />
            <Divider />
            </div>
        ))}
        <ReviewForm productId={product._id}  isOpened={isReviewOpened}/>
    </Card>
    </motion.div>
    </div>;
}));