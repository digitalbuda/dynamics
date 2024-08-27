﻿/**
* SAMPLE CODE NOTICE
* 
* THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
* OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
* THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
* NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
*/

namespace Contoso.RetailServer.Ecommerce.AbandonedCartSample.Messaging
{
    using Microsoft.Dynamics.Commerce.RetailProxy;
    using System.Collections.Generic;
    using System.Net;
    using System.Threading.Tasks;

    public interface IEmailProvider
    {
        Task<HttpStatusCode> SendEmails(List<Cart> abandonedCarts,
                                        PagedResult<Customer> customers,
                                        PagedResult<Product> products,
                                        string returnToCartUrl,
                                        string currency);
    }
}

