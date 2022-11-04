import { Link } from 'react-router-dom';
import { Offer } from '../../types/types';

type Props = {
  offer: Offer;
  onMouseEnter: (offerId: number) => void;
  onMouseLeave: () => void;
}

export default function Card({ offer, onMouseEnter, onMouseLeave }: Props) {

  function handleMouseEnter() {
    onMouseEnter(offer.id);
  }

  return (
    <Link
      to={`/offer/${offer.id}`}
      key={offer.id}
    >
      <article className='cities__card place-card'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {
          offer.isPremium &&
          <div className='place-card__mark'>
            <span>Premium</span>
          </div>
        }
        <div className='cities__image-wrapper place-card__image-wrapper'>
          <img className='place-card__image' src={offer.previewImage} width='260' height='200' alt='' />
        </div>
        <div className='place-card__info'>
          <div className='place-card__price-wrapper'>
            <div className='place-card__price'>
              <b className='place-card__price-value'>&euro;{offer.price}</b>
              <span className='place-card__price-text'>&#47;&nbsp;night</span>
            </div>
            <button className={`place-card__bookmark-button  ${offer.isFavorite ? 'place-card__bookmark-button--active' : ''} button `} type='button'>
              <svg className='place-card__bookmark-icon' width='18' height='19'>
                <use xlinkHref='#icon-bookmark'></use>
              </svg>
              <span className='visually-hidden'>To bookmarks</span>
            </button>
          </div>
          {offer.rating &&
            <div className='place-card__rating rating'>
              <div className='place-card__stars rating__stars'>
                <span style={{ 'width': `${offer.rating * 20}%` }}></span>
                <span className='visually-hidden'>Rating</span>
              </div>
            </div>}
          <h2 className='place-card__name'>
            <div>{offer.title}</div>
          </h2>
          <p className='place-card__type'>{offer.type}</p>
        </div>
      </article >
    </Link >
  );
}
