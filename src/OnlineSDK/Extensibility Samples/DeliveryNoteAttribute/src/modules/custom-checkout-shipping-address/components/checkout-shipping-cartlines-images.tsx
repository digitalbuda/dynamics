/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

/* eslint-disable no-duplicate-imports */
import { IImageProps, IImageSettings, Image, IRequestContext } from '@msdyn365-commerce/core';
import { CartLine, SimpleProduct } from '@msdyn365-commerce/retail-proxy';
import { ArrayExtensions } from '@msdyn365-commerce-modules/retail-actions';
import { format, isMobile, VariantType } from '@msdyn365-commerce-modules/utilities';
import classnames from 'classnames';
import * as React from 'react';

import { ICustomCheckoutShippingAddressResources } from '../custom-checkout-shipping-address.props.autogenerated';

/**
 * The cartline product interface.
 */
export interface ICartLineWithProduct {
    cartLine: CartLine;
    product?: SimpleProduct;
}

/**
 * The checkout shipping cartline interface.
 */
export interface ICheckoutShippingCartLineInfo {
    lineId: string;
    imageProps: IImageProps;
    quantity: number;
}

/**
 * The checkout shipping cartline props.
 */
export interface ICheckoutShippingCartLinesProps {
    moduleClassName: string;
    cartLines: ICheckoutShippingCartLineInfo[];
    title: string;
    itemTitle: string;
    resources: ICustomCheckoutShippingAddressResources;
}

// eslint-disable-next-line @typescript-eslint/naming-convention -- Following as per module
export const CheckoutPickupCartLines: React.FC<ICheckoutShippingCartLinesProps> = ({
    moduleClassName,
    cartLines,
    title,
    itemTitle,
    resources
}) => {
    const context = ({
        gridSettings: {
            xs: { w: 767 },
            sm: { w: 991 },
            md: { w: 1199 },
            lg: { w: 1599 },
            xl: { w: 1600 }
        }
    } as unknown) as IRequestContext;
    const isMobileCheck = isMobile({ variant: VariantType.Browser, context });
    const isMobileView = isMobileCheck === 'xs' || isMobileCheck === 'sm';

    if (!ArrayExtensions.hasElements(cartLines)) {
        return null;
    }
    const quantity = 1;
    return (
        <div className={`${moduleClassName}__group-images`}>
            <div className={`${moduleClassName}__group-images-header`}>
                <div className={`${moduleClassName}__group-images-header-main`}>{title}</div>
                <div className={`${moduleClassName}__group-images-header-item`}>{itemTitle}</div>
            </div>
            <div className={`${moduleClassName}__group-images-lines`}>
                {cartLines.map((cartLine: ICheckoutShippingCartLineInfo) => {
                    const isShowQty = cartLine.quantity > quantity;
                    let className = `${moduleClassName}__group-images-lines-product`;
                    const role = 'text';
                    if (isShowQty) {
                        className = classnames(className, ' product-image-wide');
                    }
                    return (
                        <div className={className} key={cartLine.lineId}>
                            <Image {...cartLine.imageProps} />
                            {isMobileView
                                ? isShowQty && (
                                      <div
                                          role={role}
                                          aria-label={format(resources.productQuantityInfo, cartLine.quantity, cartLine.imageProps.altText)}
                                          className={`${moduleClassName}__group-images-lines-line-quantity`}
                                      >
                                          {cartLine.quantity}
                                      </div>
                                  )
                                : isShowQty && (
                                      <div
                                          aria-labelledby={cartLine.lineId}
                                          aria-hidden='true'
                                          className={`${moduleClassName}__group-images-lines-line-quantity`}
                                      >
                                          {cartLine.quantity}
                                      </div>
                                  )}
                            {!isMobileView && isShowQty && (
                                <span id={cartLine.lineId} className='msc-line__quantity sr-only'>
                                    {format(resources.productQuantityInfo, cartLine.quantity, cartLine.imageProps.altText)}
                                </span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/**
 * The checkout shipping cartline image settings.
 */
export const defaultImageSettings: IImageSettings = {
    viewports: {
        xs: { q: 'w=108&h=108&q=80&m=6&f=jpg', w: 108, h: 108 },
        lg: { q: 'w=108&h=108&q=80&m=6&f=jpg', w: 108, h: 108 },
        xl: { q: 'w=108&h=108&q=80&m=6&f=jpg', w: 108, h: 108 }
    },
    lazyload: true,
    quality: 80
};
