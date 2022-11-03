export function isFaforite(flag: boolean) {
  if (flag) {
    return (
      <button className='place-card__bookmark-button  place-card__bookmark-button--active button' type='button'>
        <svg className='place-card__bookmark-icon' width='18' height='19'>
          <use xlinkHref='#icon-bookmark'></use>
        </svg>
        <span className='visually-hidden'>To bookmarks</span>
      </button>
    );
  } else {
    return (
      <button className='place-card__bookmark-button button' type='button'>
        <svg className='place-card__bookmark-icon' width='18' height='19'>
          <use xlinkHref='#icon-bookmark'></use>
        </svg>
        <span className='visually-hidden'>To bookmarks</span>
      </button>
    );
  }
}

export function getUnicKey(num: number): number {
  return num * Math.random() + Math.random();
}
