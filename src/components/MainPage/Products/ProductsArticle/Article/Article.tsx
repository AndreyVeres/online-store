import './article.scss';
import { ArticleType } from './types/article.interface';

function Article({
  title,
  brand,
  category,
  description,
  price,
  stock,
  rating,
  thumbnail,
  discountPercentage,
  currency,
  children,
  isDiscount,
  discountPrice,
  imagesItem,
  alt,
}: ArticleType) {
  return (
    <article className="article">
      <h3 className="article__title">{title}</h3>
      <div className="article__section picture">
        <div className="picture__previews">
          {imagesItem}
        </div>
        <img className="article__image picture__current" src={thumbnail} alt={alt} />
        {isDiscount ? <div className="article__discount picture__discount">{`${discountPercentage}%`}</div> : null}
      </div>
      <div className="article__section about">
        <h4 className="article__subtitle about__subtitle">
          <div className="article__subtitle_bold">Brand:</div>
          {brand}
        </h4>
        <div className="article__category about__category">
          <div className="article__subtitle_bold">Category:</div>
          {category}
        </div>
        <div className="article__description about__description">
          <div className="article__subtitle_bold">Description:</div>
          {description}
        </div>
        <div className="article__rating about__rating">
          <div className="article__subtitle_bold">Rating:</div>
          {rating}
        </div>
        <div className="article__rating about__stock">
          <div className="article__subtitle_bold">Quantity:</div>
          {stock}
        </div>
      </div>
      <div className="article__section purchase">
        <h3 className="article__price purchase__price">
          <span className={` ${isDiscount ? 'purchase__price_crossed' : ''}`}>
            {`${currency}${price}`}
          </span>
          {
            isDiscount ? (
              <span className="article__price_discount purchase__price_discount">
                {` ${currency}${discountPrice}`}
              </span>
            ) : null
          }
        </h3>
        {children}
      </div>
    </article>
  );
}

export default Article;