﻿/**
* SAMPLE CODE NOTICE
* 
* THIS SAMPLE CODE IS MADE AVAILABLE AS IS.  MICROSOFT MAKES NO WARRANTIES, WHETHER EXPRESS OR IMPLIED,
* OF FITNESS FOR A PARTICULAR PURPOSE, OF ACCURACY OR COMPLETENESS OF RESPONSES, OF RESULTS, OR CONDITIONS OF MERCHANTABILITY.
* THE ENTIRE RISK OF THE USE OR THE RESULTS FROM THE USE OF THIS SAMPLE CODE REMAINS WITH THE USER.
* NO TECHNICAL SUPPORT IS PROVIDED.  YOU MAY NOT DISTRIBUTE THIS CODE UNLESS YOU HAVE A LICENSE AGREEMENT WITH MICROSOFT THAT ALLOWS YOU TO DO SO.
*/

namespace Contoso.RetailServer.Ecommerce.AbandonedCartSample.Options
{
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using Newtonsoft.Json;

    public class MediaOptions
    {
        [Required()]
        public string ImageServerUrl { get; set; }

        [Required()]
        public List<ImageViewPort> ImageViewPorts { get; set; }
    }

    public class ImageViewPort
    {
        [Required()]
        public string Viewport { get; set; }

        [Required()]
        public long ImageWidth { get; set; }

        [Required()]
        public long ImageHeight { get; set; }

        [Required()]
        public bool UseForDefaultImageTag { get; set; }
    }

}