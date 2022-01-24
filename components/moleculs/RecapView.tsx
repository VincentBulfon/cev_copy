import React from 'react';
import { RecapTypes } from 'alltypes';

const RecapView = ({
	children_count,
	voucher_count,
	inssurance_price,
	semester1_price,
	semester2_price,
	voucher_value,
}: RecapTypes) => {
	return (
		<div className="wrapper__recap">
			<ul className="recap__content">
				<li className="recap__item">
					<span className="recap__qty">1 x </span>
					<span className="recap__tiem__name">
						assurance anuelle ({inssurance_price}€)
					</span>
				</li>
				<li className="recap__item">
					<span className="recap__qty">1 x </span>
					<span className="recap__tiem__name">
						inscription anuelle 2 semestres ( {semester1_price} +{' '}
						{semester2_price} €)
					</span>
				</li>
				<li className="recap__item">
					<span className="recap__qty">1 x </span>
					<span className="recap__tiem__name">
						chèque sport ({voucher_value}€)
					</span>
				</li>
			</ul>
			<p className="recap__total">
				Total :{' '}
				<span className="recap__value">
					{children_count *
						(semester1_price + semester2_price + inssurance_price) -
						voucher_value * voucher_count}
					€
				</span>
			</p>
		</div>
	);
};

export default RecapView;
