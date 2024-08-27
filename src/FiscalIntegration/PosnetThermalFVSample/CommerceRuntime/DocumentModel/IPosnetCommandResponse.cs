﻿namespace Contoso
{
    namespace Commerce.Runtime.DocumentProvider.PosnetSample.DocumentModel.Protocol
    {
        using System;
        using System.Collections.Generic;

        /// <summary>
        /// The response from connector.
        /// </summary>
        public interface IPosnetCommandResponse
        {
            /// <summary>
            /// Name of request.
            /// </summary>
            string RequestCommandName { get; }

            /// <summary>
            /// Shows whether request executed succeeded.
            /// </summary>
            bool Success { get; }

            /// <summary>
            /// The code returned by the printer.
            /// </summary>
            ulong Code { get; }

            /// <summary>
            /// Error message returned by the printer.
            /// </summary>
            string ErrorMessage { get; }

            /// <summary>
            /// Collection of result parameters.
            /// </summary>
            IEnumerable<CommandParameter> Results { get; }
        }
    }

}