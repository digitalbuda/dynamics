/*!
 * Copyright (c) Microsoft Corporation.
 * All rights reserved. See LICENSE in the project root for license information.
 */

// eslint-disable-next-line import/no-unassigned-import
import './order-summary.scss';

// eslint-disable-next-line import/no-unassigned-import
import '../common/03-components/index.scss';

// SIG // Begin signature block
// SIG // MIInvAYJKoZIhvcNAQcCoIInrTCCJ6kCAQExDzANBglg
// SIG // hkgBZQMEAgEFADB3BgorBgEEAYI3AgEEoGkwZzAyBgor
// SIG // BgEEAYI3AgEeMCQCAQEEEBDgyQbOONQRoqMAEEvTUJAC
// SIG // AQACAQACAQACAQACAQAwMTANBglghkgBZQMEAgEFAAQg
// SIG // KrjvM24gD/ZCO3g8PSv/kukHBUuO0BNwdUroEFrtnXGg
// SIG // gg12MIIF9DCCA9ygAwIBAgITMwAAA68wQA5Mo00FQQAA
// SIG // AAADrzANBgkqhkiG9w0BAQsFADB+MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSgwJgYDVQQDEx9NaWNyb3NvZnQgQ29kZSBT
// SIG // aWduaW5nIFBDQSAyMDExMB4XDTIzMTExNjE5MDkwMFoX
// SIG // DTI0MTExNDE5MDkwMFowdDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEeMBwGA1UEAxMVTWljcm9zb2Z0IENvcnBvcmF0aW9u
// SIG // MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA
// SIG // zkvLNa2un9GBrYNDoRGkGv7d0PqtTBB4ViYakFbjuWpm
// SIG // F0KcvDAzzaCWJPhVgIXjz+S8cHEoHuWnp/n+UOljT3eh
// SIG // A8Rs6Lb1aTYub3tB/e0txewv2sQ3yscjYdtTBtFvEm9L
// SIG // 8Yv76K3Cxzi/Yvrdg+sr7w8y5RHn1Am0Ff8xggY1xpWC
// SIG // XFI+kQM18njQDcUqSlwBnexYfqHBhzz6YXA/S0EziYBu
// SIG // 2O2mM7R6gSyYkEOHgIGTVOGnOvvC5xBgC4KNcnQuQSRL
// SIG // iUI2CmzU8vefR6ykruyzt1rNMPI8OqWHQtSDKXU5JNqb
// SIG // k4GNjwzcwbSzOHrxuxWHq91l/vLdVDGDUwIDAQABo4IB
// SIG // czCCAW8wHwYDVR0lBBgwFgYKKwYBBAGCN0wIAQYIKwYB
// SIG // BQUHAwMwHQYDVR0OBBYEFEcccTTyBDxkjvJKs/m4AgEF
// SIG // hl7BMEUGA1UdEQQ+MDykOjA4MR4wHAYDVQQLExVNaWNy
// SIG // b3NvZnQgQ29ycG9yYXRpb24xFjAUBgNVBAUTDTIzMDAx
// SIG // Mis1MDE4MjYwHwYDVR0jBBgwFoAUSG5k5VAF04KqFzc3
// SIG // IrVtqMp1ApUwVAYDVR0fBE0wSzBJoEegRYZDaHR0cDov
// SIG // L3d3dy5taWNyb3NvZnQuY29tL3BraW9wcy9jcmwvTWlj
// SIG // Q29kU2lnUENBMjAxMV8yMDExLTA3LTA4LmNybDBhBggr
// SIG // BgEFBQcBAQRVMFMwUQYIKwYBBQUHMAKGRWh0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvY2VydHMvTWlj
// SIG // Q29kU2lnUENBMjAxMV8yMDExLTA3LTA4LmNydDAMBgNV
// SIG // HRMBAf8EAjAAMA0GCSqGSIb3DQEBCwUAA4ICAQCEsRbf
// SIG // 80dn60xTweOWHZoWaQdpzSaDqIvqpYHE5ZzuEMJWDdcP
// SIG // 72MGw8v6BSaJQ+a+hTCXdERnIBDPKvU4ENjgu4EBJocH
// SIG // lSe8riiZUAR+z+z4OUYqoFd3EqJyfjjOJBR2z94Dy4ss
// SIG // 7LEkHUbj2NZiFqBoPYu2OGQvEk+1oaUsnNKZ7Nl7FHtV
// SIG // 7CI2lHBru83e4IPe3glIi0XVZJT5qV6Gx/QhAFmpEVBj
// SIG // SAmDdgII4UUwuI9yiX6jJFNOEek6MoeP06LMJtbqA3Bq
// SIG // +ZWmJ033F97uVpyaiS4bj3vFI/ZBgDnMqNDtZjcA2vi4
// SIG // RRMweggd9vsHyTLpn6+nXoLy03vMeebq0C3k44pgUIEu
// SIG // PQUlJIRTe6IrN3GcjaZ6zHGuQGWgu6SyO9r7qkrEpS2p
// SIG // RjnGZjx2RmCamdAWnDdu+DmfNEPAddYjaJJ7PTnd+PGz
// SIG // G+WeH4ocWgVnm5fJFhItjj70CJjgHqt57e1FiQcyWCwB
// SIG // hKX2rGgN2UICHBF3Q/rsKOspjMw2OlGphTn2KmFl5J7c
// SIG // Qxru54A9roClLnHGCiSUYos/iwFHI/dAVXEh0S0KKfTf
// SIG // M6AC6/9bCbsD61QLcRzRIElvgCgaiMWFjOBL99pemoEl
// SIG // AHsyzG6uX93fMfas09N9YzA0/rFAKAsNDOcFbQlEHKiD
// SIG // T7mI20tVoCcmSIhJATCCB3owggVioAMCAQICCmEOkNIA
// SIG // AAAAAAMwDQYJKoZIhvcNAQELBQAwgYgxCzAJBgNVBAYT
// SIG // AlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYDVQQH
// SIG // EwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQgQ29y
// SIG // cG9yYXRpb24xMjAwBgNVBAMTKU1pY3Jvc29mdCBSb290
// SIG // IENlcnRpZmljYXRlIEF1dGhvcml0eSAyMDExMB4XDTEx
// SIG // MDcwODIwNTkwOVoXDTI2MDcwODIxMDkwOVowfjELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEoMCYGA1UEAxMfTWljcm9zb2Z0
// SIG // IENvZGUgU2lnbmluZyBQQ0EgMjAxMTCCAiIwDQYJKoZI
// SIG // hvcNAQEBBQADggIPADCCAgoCggIBAKvw+nIQHC6t2G6q
// SIG // ghBNNLrytlghn0IbKmvpWlCquAY4GgRJun/DDB7dN2vG
// SIG // EtgL8DjCmQawyDnVARQxQtOJDXlkh36UYCRsr55JnOlo
// SIG // XtLfm1OyCizDr9mpK656Ca/XllnKYBoF6WZ26DJSJhIv
// SIG // 56sIUM+zRLdd2MQuA3WraPPLbfM6XKEW9Ea64DhkrG5k
// SIG // NXimoGMPLdNAk/jj3gcN1Vx5pUkp5w2+oBN3vpQ97/vj
// SIG // K1oQH01WKKJ6cuASOrdJXtjt7UORg9l7snuGG9k+sYxd
// SIG // 6IlPhBryoS9Z5JA7La4zWMW3Pv4y07MDPbGyr5I4ftKd
// SIG // gCz1TlaRITUlwzluZH9TupwPrRkjhMv0ugOGjfdf8NBS
// SIG // v4yUh7zAIXQlXxgotswnKDglmDlKNs98sZKuHCOnqWbs
// SIG // YR9q4ShJnV+I4iVd0yFLPlLEtVc/JAPw0XpbL9Uj43Bd
// SIG // D1FGd7P4AOG8rAKCX9vAFbO9G9RVS+c5oQ/pI0m8GLhE
// SIG // fEXkwcNyeuBy5yTfv0aZxe/CHFfbg43sTUkwp6uO3+xb
// SIG // n6/83bBm4sGXgXvt1u1L50kppxMopqd9Z4DmimJ4X7Iv
// SIG // hNdXnFy/dygo8e1twyiPLI9AN0/B4YVEicQJTMXUpUMv
// SIG // dJX3bvh4IFgsE11glZo+TzOE2rCIF96eTvSWsLxGoGyY
// SIG // 0uDWiIwLAgMBAAGjggHtMIIB6TAQBgkrBgEEAYI3FQEE
// SIG // AwIBADAdBgNVHQ4EFgQUSG5k5VAF04KqFzc3IrVtqMp1
// SIG // ApUwGQYJKwYBBAGCNxQCBAweCgBTAHUAYgBDAEEwCwYD
// SIG // VR0PBAQDAgGGMA8GA1UdEwEB/wQFMAMBAf8wHwYDVR0j
// SIG // BBgwFoAUci06AjGQQ7kUBU7h6qfHMdEjiTQwWgYDVR0f
// SIG // BFMwUTBPoE2gS4ZJaHR0cDovL2NybC5taWNyb3NvZnQu
// SIG // Y29tL3BraS9jcmwvcHJvZHVjdHMvTWljUm9vQ2VyQXV0
// SIG // MjAxMV8yMDExXzAzXzIyLmNybDBeBggrBgEFBQcBAQRS
// SIG // MFAwTgYIKwYBBQUHMAKGQmh0dHA6Ly93d3cubWljcm9z
// SIG // b2Z0LmNvbS9wa2kvY2VydHMvTWljUm9vQ2VyQXV0MjAx
// SIG // MV8yMDExXzAzXzIyLmNydDCBnwYDVR0gBIGXMIGUMIGR
// SIG // BgkrBgEEAYI3LgMwgYMwPwYIKwYBBQUHAgEWM2h0dHA6
// SIG // Ly93d3cubWljcm9zb2Z0LmNvbS9wa2lvcHMvZG9jcy9w
// SIG // cmltYXJ5Y3BzLmh0bTBABggrBgEFBQcCAjA0HjIgHQBM
// SIG // AGUAZwBhAGwAXwBwAG8AbABpAGMAeQBfAHMAdABhAHQA
// SIG // ZQBtAGUAbgB0AC4gHTANBgkqhkiG9w0BAQsFAAOCAgEA
// SIG // Z/KGpZjgVHkaLtPYdGcimwuWEeFjkplCln3SeQyQwWVf
// SIG // Liw++MNy0W2D/r4/6ArKO79HqaPzadtjvyI1pZddZYSQ
// SIG // fYtGUFXYDJJ80hpLHPM8QotS0LD9a+M+By4pm+Y9G6XU
// SIG // tR13lDni6WTJRD14eiPzE32mkHSDjfTLJgJGKsKKELuk
// SIG // qQUMm+1o+mgulaAqPyprWEljHwlpblqYluSD9MCP80Yr
// SIG // 3vw70L01724lruWvJ+3Q3fMOr5kol5hNDj0L8giJ1h/D
// SIG // Mhji8MUtzluetEk5CsYKwsatruWy2dsViFFFWDgycSca
// SIG // f7H0J/jeLDogaZiyWYlobm+nt3TDQAUGpgEqKD6CPxNN
// SIG // ZgvAs0314Y9/HG8VfUWnduVAKmWjw11SYobDHWM2l4bf
// SIG // 2vP48hahmifhzaWX0O5dY0HjWwechz4GdwbRBrF1HxS+
// SIG // YWG18NzGGwS+30HHDiju3mUv7Jf2oVyW2ADWoUa9WfOX
// SIG // pQlLSBCZgB/QACnFsZulP0V3HjXG0qKin3p6IvpIlR+r
// SIG // +0cjgPWe+L9rt0uX4ut1eBrs6jeZeRhL/9azI2h15q/6
// SIG // /IvrC4DqaTuv/DDtBEyO3991bWORPdGdVk5Pv4BXIqF4
// SIG // ETIheu9BCrE/+6jMpF3BoYibV3FWTkhFwELJm3ZbCoBI
// SIG // a/15n8G9bW1qyVJzEw16UM0xghmeMIIZmgIBATCBlTB+
// SIG // MQswCQYDVQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3Rv
// SIG // bjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWlj
// SIG // cm9zb2Z0IENvcnBvcmF0aW9uMSgwJgYDVQQDEx9NaWNy
// SIG // b3NvZnQgQ29kZSBTaWduaW5nIFBDQSAyMDExAhMzAAAD
// SIG // rzBADkyjTQVBAAAAAAOvMA0GCWCGSAFlAwQCAQUAoIGu
// SIG // MBkGCSqGSIb3DQEJAzEMBgorBgEEAYI3AgEEMBwGCisG
// SIG // AQQBgjcCAQsxDjAMBgorBgEEAYI3AgEVMC8GCSqGSIb3
// SIG // DQEJBDEiBCBzZPASEb1PD/lIO4GUhJgdVtHqVD9IO8Nu
// SIG // 9eM3rIwWJzBCBgorBgEEAYI3AgEMMTQwMqAUgBIATQBp
// SIG // AGMAcgBvAHMAbwBmAHShGoAYaHR0cDovL3d3dy5taWNy
// SIG // b3NvZnQuY29tMA0GCSqGSIb3DQEBAQUABIIBAAJZPO97
// SIG // 6+Jta07a5yFLDHKitS/4pWkI08LniqXFFo02R30mOyCv
// SIG // f6k+BwdVPO5iOf0xUCCV96v4gKHOWX7yexo6ArNIP0mr
// SIG // EkHgKNfxChdAjLR5Ridawq2xuMiMvBprkPlT9EBFd9WU
// SIG // 97ZcnW7CH9pwK1I7rvVQhiPBUpJGwfPrSNT9xevwKvyu
// SIG // 5cF37kI0B6+iNHv9Yr1rm1vP2Cy/GOzWMC1v5W4vOVCY
// SIG // c9C0L84zveinn+gXByhbs7uvQUnnp/tQFNioyvMNPvqK
// SIG // 4G1utCkHsE/16x1ALcVMWGjqN2am4BN+9IWBLqee6AuR
// SIG // 6vni88s0y+e7cRec9iP+nxMgS5+hghcoMIIXJAYKKwYB
// SIG // BAGCNwMDATGCFxQwghcQBgkqhkiG9w0BBwKgghcBMIIW
// SIG // /QIBAzEPMA0GCWCGSAFlAwQCAQUAMIIBWAYLKoZIhvcN
// SIG // AQkQAQSgggFHBIIBQzCCAT8CAQEGCisGAQQBhFkKAwEw
// SIG // MTANBglghkgBZQMEAgEFAAQg8NGjE+lWVlaB+U0heyEH
// SIG // bnfvvEHKnnelDT7rOmX+IS4CBmbGHkbbURgSMjAyNDA4
// SIG // MjcxMDI2NDYuMTFaMASAAgH0oIHYpIHVMIHSMQswCQYD
// SIG // VQQGEwJVUzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4G
// SIG // A1UEBxMHUmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0
// SIG // IENvcnBvcmF0aW9uMS0wKwYDVQQLEyRNaWNyb3NvZnQg
// SIG // SXJlbGFuZCBPcGVyYXRpb25zIExpbWl0ZWQxJjAkBgNV
// SIG // BAsTHVRoYWxlcyBUU1MgRVNOOkZDNDEtNEJENC1EMjIw
// SIG // MSUwIwYDVQQDExxNaWNyb3NvZnQgVGltZS1TdGFtcCBT
// SIG // ZXJ2aWNloIIReDCCBycwggUPoAMCAQICEzMAAAHimZmV
// SIG // 8dzjIOsAAQAAAeIwDQYJKoZIhvcNAQELBQAwfDELMAkG
// SIG // A1UEBhMCVVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAO
// SIG // BgNVBAcTB1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29m
// SIG // dCBDb3Jwb3JhdGlvbjEmMCQGA1UEAxMdTWljcm9zb2Z0
// SIG // IFRpbWUtU3RhbXAgUENBIDIwMTAwHhcNMjMxMDEyMTkw
// SIG // NzI1WhcNMjUwMTEwMTkwNzI1WjCB0jELMAkGA1UEBhMC
// SIG // VVMxEzARBgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcT
// SIG // B1JlZG1vbmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jw
// SIG // b3JhdGlvbjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxh
// SIG // bmQgT3BlcmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1U
// SIG // aGFsZXMgVFNTIEVTTjpGQzQxLTRCRDQtRDIyMDElMCMG
// SIG // A1UEAxMcTWljcm9zb2Z0IFRpbWUtU3RhbXAgU2Vydmlj
// SIG // ZTCCAiIwDQYJKoZIhvcNAQEBBQADggIPADCCAgoCggIB
// SIG // ALVjtZhV+kFmb8cKQpg2mzisDlRI978Gb2amGvbAmCd0
// SIG // 4JVGeTe/QGzM8KbQrMDol7DC7jS03JkcrPsWi9WpVwsI
// SIG // ckRQ8AkX1idBG9HhyCspAavfuvz55khl7brPQx7H99UJ
// SIG // bsE3wMmpmJasPWpgF05zZlvpWQDULDcIYyl5lXI4HVZ5
// SIG // N6MSxWO8zwWr4r9xkMmUXs7ICxDJr5a39SSePAJRIyzn
// SIG // aIc0WzZ6MFcTRzLLNyPBE4KrVv1LFd96FNxAzwnetSeP
// SIG // g88EmRezr2T3HTFElneJXyQYd6YQ7eCIc7yllWoY03CE
// SIG // g9ghorp9qUKcBUfFcS4XElf3GSERnlzJsK7s/ZGPU4da
// SIG // HT2jWGoYha2QCOmkgjOmBFCqQFFwFmsPrZj4eQszYxq4
// SIG // c4HqPnUu4hT4aqpvUZ3qIOXbdyU42pNL93cn0rPTTleO
// SIG // UsOQbgvlRdthFCBepxfb6nbsp3fcZaPBfTbtXVa8nLQu
// SIG // MCBqyfsebuqnbwj+lHQfqKpivpyd7KCWACoj78XUwYqy
// SIG // 1HyYnStTme4T9vK6u2O/KThfROeJHiSg44ymFj+34IcF
// SIG // EhPogaKvNNsTVm4QbqphCyknrwByqorBCLH6bllRtJMJ
// SIG // wmu7GRdTQsIx2HMKqphEtpSm1z3ufASdPrgPhsQIRFkH
// SIG // ZGuihL1Jjj4Lu3CbAmha0lOrAgMBAAGjggFJMIIBRTAd
// SIG // BgNVHQ4EFgQURIQOEdq+7QdslptJiCRNpXgJ2gUwHwYD
// SIG // VR0jBBgwFoAUn6cVXQBeYl2D9OXSZacbUzUZ6XIwXwYD
// SIG // VR0fBFgwVjBUoFKgUIZOaHR0cDovL3d3dy5taWNyb3Nv
// SIG // ZnQuY29tL3BraW9wcy9jcmwvTWljcm9zb2Z0JTIwVGlt
// SIG // ZS1TdGFtcCUyMFBDQSUyMDIwMTAoMSkuY3JsMGwGCCsG
// SIG // AQUFBwEBBGAwXjBcBggrBgEFBQcwAoZQaHR0cDovL3d3
// SIG // dy5taWNyb3NvZnQuY29tL3BraW9wcy9jZXJ0cy9NaWNy
// SIG // b3NvZnQlMjBUaW1lLVN0YW1wJTIwUENBJTIwMjAxMCgx
// SIG // KS5jcnQwDAYDVR0TAQH/BAIwADAWBgNVHSUBAf8EDDAK
// SIG // BggrBgEFBQcDCDAOBgNVHQ8BAf8EBAMCB4AwDQYJKoZI
// SIG // hvcNAQELBQADggIBAORURDGrVRTbnulfsg2cTsyyh7YX
// SIG // vhVU7NZMkITAQYsFEPVgvSviCylr5ap3ka76Yz0t/6lx
// SIG // uczI6w7tXq8n4WxUUgcj5wAhnNorhnD8ljYqbck37fgg
// SIG // YK3+wEwLhP1PGC5tvXK0xYomU1nU+lXOy9ZRnShI/HZd
// SIG // Frw2srgtsbWow9OMuADS5lg7okrXa2daCOGnxuaD1IO+
// SIG // 65E7qv2O0W0sGj7AWdOjNdpexPrspL2KEcOMeJVmkk/O
// SIG // 0ganhFzzHAnWjtNWneU11WQ6Bxv8OpN1fY9wzQoiycgv
// SIG // OOJM93od55EGeXxfF8bofLVlUE3zIikoSed+8s61NDP+
// SIG // x9RMya2mwK/Ys1xdvDlZTHndIKssfmu3vu/a+BFf2uIo
// SIG // ycVTvBQpv/drRJD68eo401mkCRFkmy/+BmQlRrx2rapq
// SIG // Au5k0Nev+iUdBUKmX/iOaKZ75vuQg7hCiBA5xIm5ZIXD
// SIG // SlX47wwFar3/BgTwntMq9ra6QRAeS/o/uYWkmvqvE8Aq
// SIG // 38QmKgTiBnWSS/uVPcaHEyArnyFh5G+qeCGmL44MfEnF
// SIG // Ehxc3saPmXhe6MhSgCIGJUZDA7336nQD8fn4y6534Lel
// SIG // +LuT5F5bFt0mLwd+H5GxGzObZmm/c3pEWtHv1ug7dS/D
// SIG // frcd1sn2E4gk4W1L1jdRBbK9xwkMmwY+CHZeMSvBMIIH
// SIG // cTCCBVmgAwIBAgITMwAAABXF52ueAptJmQAAAAAAFTAN
// SIG // BgkqhkiG9w0BAQsFADCBiDELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEyMDAGA1UEAxMpTWljcm9zb2Z0IFJvb3QgQ2VydGlm
// SIG // aWNhdGUgQXV0aG9yaXR5IDIwMTAwHhcNMjEwOTMwMTgy
// SIG // MjI1WhcNMzAwOTMwMTgzMjI1WjB8MQswCQYDVQQGEwJV
// SIG // UzETMBEGA1UECBMKV2FzaGluZ3RvbjEQMA4GA1UEBxMH
// SIG // UmVkbW9uZDEeMBwGA1UEChMVTWljcm9zb2Z0IENvcnBv
// SIG // cmF0aW9uMSYwJAYDVQQDEx1NaWNyb3NvZnQgVGltZS1T
// SIG // dGFtcCBQQ0EgMjAxMDCCAiIwDQYJKoZIhvcNAQEBBQAD
// SIG // ggIPADCCAgoCggIBAOThpkzntHIhC3miy9ckeb0O1YLT
// SIG // /e6cBwfSqWxOdcjKNVf2AX9sSuDivbk+F2Az/1xPx2b3
// SIG // lVNxWuJ+Slr+uDZnhUYjDLWNE893MsAQGOhgfWpSg0S3
// SIG // po5GawcU88V29YZQ3MFEyHFcUTE3oAo4bo3t1w/YJlN8
// SIG // OWECesSq/XJprx2rrPY2vjUmZNqYO7oaezOtgFt+jBAc
// SIG // nVL+tuhiJdxqD89d9P6OU8/W7IVWTe/dvI2k45GPsjks
// SIG // UZzpcGkNyjYtcI4xyDUoveO0hyTD4MmPfrVUj9z6BVWY
// SIG // bWg7mka97aSueik3rMvrg0XnRm7KMtXAhjBcTyziYrLN
// SIG // ueKNiOSWrAFKu75xqRdbZ2De+JKRHh09/SDPc31BmkZ1
// SIG // zcRfNN0Sidb9pSB9fvzZnkXftnIv231fgLrbqn427DZM
// SIG // 9ituqBJR6L8FA6PRc6ZNN3SUHDSCD/AQ8rdHGO2n6Jl8
// SIG // P0zbr17C89XYcz1DTsEzOUyOArxCaC4Q6oRRRuLRvWoY
// SIG // WmEBc8pnol7XKHYC4jMYctenIPDC+hIK12NvDMk2ZItb
// SIG // oKaDIV1fMHSRlJTYuVD5C4lh8zYGNRiER9vcG9H9stQc
// SIG // xWv2XFJRXRLbJbqvUAV6bMURHXLvjflSxIUXk8A8Fdsa
// SIG // N8cIFRg/eKtFtvUeh17aj54WcmnGrnu3tz5q4i6tAgMB
// SIG // AAGjggHdMIIB2TASBgkrBgEEAYI3FQEEBQIDAQABMCMG
// SIG // CSsGAQQBgjcVAgQWBBQqp1L+ZMSavoKRPEY1Kc8Q/y8E
// SIG // 7jAdBgNVHQ4EFgQUn6cVXQBeYl2D9OXSZacbUzUZ6XIw
// SIG // XAYDVR0gBFUwUzBRBgwrBgEEAYI3TIN9AQEwQTA/Bggr
// SIG // BgEFBQcCARYzaHR0cDovL3d3dy5taWNyb3NvZnQuY29t
// SIG // L3BraW9wcy9Eb2NzL1JlcG9zaXRvcnkuaHRtMBMGA1Ud
// SIG // JQQMMAoGCCsGAQUFBwMIMBkGCSsGAQQBgjcUAgQMHgoA
// SIG // UwB1AGIAQwBBMAsGA1UdDwQEAwIBhjAPBgNVHRMBAf8E
// SIG // BTADAQH/MB8GA1UdIwQYMBaAFNX2VsuP6KJcYmjRPZSQ
// SIG // W9fOmhjEMFYGA1UdHwRPME0wS6BJoEeGRWh0dHA6Ly9j
// SIG // cmwubWljcm9zb2Z0LmNvbS9wa2kvY3JsL3Byb2R1Y3Rz
// SIG // L01pY1Jvb0NlckF1dF8yMDEwLTA2LTIzLmNybDBaBggr
// SIG // BgEFBQcBAQROMEwwSgYIKwYBBQUHMAKGPmh0dHA6Ly93
// SIG // d3cubWljcm9zb2Z0LmNvbS9wa2kvY2VydHMvTWljUm9v
// SIG // Q2VyQXV0XzIwMTAtMDYtMjMuY3J0MA0GCSqGSIb3DQEB
// SIG // CwUAA4ICAQCdVX38Kq3hLB9nATEkW+Geckv8qW/qXBS2
// SIG // Pk5HZHixBpOXPTEztTnXwnE2P9pkbHzQdTltuw8x5MKP
// SIG // +2zRoZQYIu7pZmc6U03dmLq2HnjYNi6cqYJWAAOwBb6J
// SIG // 6Gngugnue99qb74py27YP0h1AdkY3m2CDPVtI1TkeFN1
// SIG // JFe53Z/zjj3G82jfZfakVqr3lbYoVSfQJL1AoL8ZthIS
// SIG // EV09J+BAljis9/kpicO8F7BUhUKz/AyeixmJ5/ALaoHC
// SIG // gRlCGVJ1ijbCHcNhcy4sa3tuPywJeBTpkbKpW99Jo3QM
// SIG // vOyRgNI95ko+ZjtPu4b6MhrZlvSP9pEB9s7GdP32THJv
// SIG // EKt1MMU0sHrYUP4KWN1APMdUbZ1jdEgssU5HLcEUBHG/
// SIG // ZPkkvnNtyo4JvbMBV0lUZNlz138eW0QBjloZkWsNn6Qo
// SIG // 3GcZKCS6OEuabvshVGtqRRFHqfG3rsjoiV5PndLQTHa1
// SIG // V1QJsWkBRH58oWFsc/4Ku+xBZj1p/cvBQUl+fpO+y/g7
// SIG // 5LcVv7TOPqUxUYS8vwLBgqJ7Fx0ViY1w/ue10CgaiQuP
// SIG // Ntq6TPmb/wrpNPgkNWcr4A245oyZ1uEi6vAnQj0llOZ0
// SIG // dFtq0Z4+7X6gMTN9vMvpe784cETRkPHIqzqKOghif9lw
// SIG // Y1NNje6CbaUFEMFxBmoQtB1VM1izoXBm8qGCAtQwggI9
// SIG // AgEBMIIBAKGB2KSB1TCB0jELMAkGA1UEBhMCVVMxEzAR
// SIG // BgNVBAgTCldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1v
// SIG // bmQxHjAcBgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlv
// SIG // bjEtMCsGA1UECxMkTWljcm9zb2Z0IElyZWxhbmQgT3Bl
// SIG // cmF0aW9ucyBMaW1pdGVkMSYwJAYDVQQLEx1UaGFsZXMg
// SIG // VFNTIEVTTjpGQzQxLTRCRDQtRDIyMDElMCMGA1UEAxMc
// SIG // TWljcm9zb2Z0IFRpbWUtU3RhbXAgU2VydmljZaIjCgEB
// SIG // MAcGBSsOAwIaAxUAFpuZafp0bnpJdIhfiB1d8pTohm+g
// SIG // gYMwgYCkfjB8MQswCQYDVQQGEwJVUzETMBEGA1UECBMK
// SIG // V2FzaGluZ3RvbjEQMA4GA1UEBxMHUmVkbW9uZDEeMBwG
// SIG // A1UEChMVTWljcm9zb2Z0IENvcnBvcmF0aW9uMSYwJAYD
// SIG // VQQDEx1NaWNyb3NvZnQgVGltZS1TdGFtcCBQQ0EgMjAx
// SIG // MDANBgkqhkiG9w0BAQUFAAIFAOp33LwwIhgPMjAyNDA4
// SIG // MjcxMzAzNTZaGA8yMDI0MDgyODEzMDM1NlowdDA6Bgor
// SIG // BgEEAYRZCgQBMSwwKjAKAgUA6nfcvAIBADAHAgEAAgIS
// SIG // wzAHAgEAAgIShTAKAgUA6nkuPAIBADA2BgorBgEEAYRZ
// SIG // CgQCMSgwJjAMBgorBgEEAYRZCgMCoAowCAIBAAIDB6Eg
// SIG // oQowCAIBAAIDAYagMA0GCSqGSIb3DQEBBQUAA4GBAGA1
// SIG // 8qbtAPdOHePpoGrFXNyGqCBQmu4GAaxnx69I3wBK0ovo
// SIG // RWt/R/RTNL2Z2Vi+DmSGMMJePjdSFGT6UkBI8r9vWdfA
// SIG // 4XeOvGgAFR2OlQr254zQ9I8cpZodMao7pbMqQY7aMyPT
// SIG // 8XBVEOD9xhDAOvDIsl3qO3MELplY3z+QMUKEMYIEDTCC
// SIG // BAkCAQEwgZMwfDELMAkGA1UEBhMCVVMxEzARBgNVBAgT
// SIG // Cldhc2hpbmd0b24xEDAOBgNVBAcTB1JlZG1vbmQxHjAc
// SIG // BgNVBAoTFU1pY3Jvc29mdCBDb3Jwb3JhdGlvbjEmMCQG
// SIG // A1UEAxMdTWljcm9zb2Z0IFRpbWUtU3RhbXAgUENBIDIw
// SIG // MTACEzMAAAHimZmV8dzjIOsAAQAAAeIwDQYJYIZIAWUD
// SIG // BAIBBQCgggFKMBoGCSqGSIb3DQEJAzENBgsqhkiG9w0B
// SIG // CRABBDAvBgkqhkiG9w0BCQQxIgQgHRGoIHhxNmoKGvUI
// SIG // 5PT3pdjW37y5wuiTyeDZ+RBPJXIwgfoGCyqGSIb3DQEJ
// SIG // EAIvMYHqMIHnMIHkMIG9BCAriSpKEP0muMbBUETODoL4
// SIG // d5LU6I/bjucIZkOJCI9//zCBmDCBgKR+MHwxCzAJBgNV
// SIG // BAYTAlVTMRMwEQYDVQQIEwpXYXNoaW5ndG9uMRAwDgYD
// SIG // VQQHEwdSZWRtb25kMR4wHAYDVQQKExVNaWNyb3NvZnQg
// SIG // Q29ycG9yYXRpb24xJjAkBgNVBAMTHU1pY3Jvc29mdCBU
// SIG // aW1lLVN0YW1wIFBDQSAyMDEwAhMzAAAB4pmZlfHc4yDr
// SIG // AAEAAAHiMCIEILSX1Yn0s7kyV/aVmnhY+xz4JQvZm0of
// SIG // 1jeoCS95Rw5dMA0GCSqGSIb3DQEBCwUABIICAGX5tq3p
// SIG // iSc67L4vJKCmZ3jjqtLILQ4JVUQ1GRL1/5+/kwjvaUIj
// SIG // 1sZU4MiY2RS3MsFwoAmH19kJIXm+KyhnO5kVlEcN920a
// SIG // CkVTxWQ+B7/PZRE1iP0IZ4SPNWoT102P6HZSYkDOzmny
// SIG // VrvmdxAKBddZi3VCPoQ6J/QHpPjkn1KKJteHQXWWg8kr
// SIG // afv31O/gBX9vNdOJXCPrn2NoyQbGdnkrqXgy/j3xAkKM
// SIG // jEGhj41jLEeJhugkOUtGrJ696K0imFRuC6o6PBX8w6hm
// SIG // ziNcK1PWVZA1uHnJZqViGAvy8RNUmOe+iv+mJHUgTnEE
// SIG // vpiwm658JmDWn/csR3i6cx4UwGj37Ems3Q9qQUAvGwdd
// SIG // m/kSnv5B00aZqSBnH4u1XUlh4w5fdHaS4wRtOov6krUK
// SIG // ckcKkw0qMZjAewL0gPlDL/ED2FuzNI5nNa9X9vagN9Nt
// SIG // ehiwJqPpNedYH4PFuW8sF+X+8qMYt4Vg1Z28D/qQTLoC
// SIG // BC9iUscf5aI1gmRmWDWRhtpyPLYhNMl01vhp7BfpRxEz
// SIG // hUxL5ctJU8wadldyT3VOiglJcLwhwMvRbjLlga7fPTs3
// SIG // nHKYTjM32ykuGrbigGHEmDMKJX//9Skohf/7CIMkci5c
// SIG // srfCsW0mYFqgMg5wkffVwmI9k2CnxChKxqqRm3ytc14K
// SIG // CQw58oDleT4gbzui
// SIG // End signature block
