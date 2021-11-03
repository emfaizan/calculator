(window.webpackJsonp = window.webpackJsonp || []).push([
    [0],
    {
        28: function (e, t, n) {
            "use strict";
            n.r(t);
            n(29), n(26), n(53), n(61);
            function a(e) {
                e = e.replace(/[\D]/g, "");
                var t = parseInt(e);
                return { value: (e = "$" + (e = new Intl.NumberFormat("en-US").format(e))), number: t };
            }
            function r(e) {
                return { value: (e = e.replace("%", "")), number: parseFloat(e || "0") };
            }
            !(function () {
                var e = { purchaseAmount: 0, downPayment: 0, loanTerm: 0, interestRate: 0 },
                    t = 0,
                    n = document.getElementById("purchase-amount");
                n.addEventListener("input", function (t) {
                    var r = a(t.target.value),
                        u = r.value,
                        o = r.number;
                    (n.value = o ? u : ""), (e.purchaseAmount = o);
                });
                var u = document.getElementById("down-payment");
                u.addEventListener("input", function (t) {
                    var n = a(t.target.value),
                        r = n.value,
                        o = n.number;
                    (u.value = o ? r : ""), (e.downPayment = o);
                });
                var o = document.getElementById("loan-term");
                o.addEventListener("input", function (t) {
                    var n = (function (e) {
                            e = e.replace(/[\D]/g, "");
                            var t = parseInt(e || "0");
                            return { value: (e = new Intl.NumberFormat("en-US").format(e)), number: t };
                        })(t.target.value),
                        a = n.value,
                        r = n.number;
                    (o.value = r ? a : ""), (e.loanTerm = r);
                });
                var l = document.getElementById("interest-rate");
                l.addEventListener("keydown", function (e) {
                    var t = e.keyCode;
                    /[\D]/.test(e.key) && 190 !== t && 9 !== t && 8 !== t && 110 !== t && 37 !== t && 39 !== t && e.preventDefault();
                }),
                    l.addEventListener("input", function (t) {
                        var n = r(t.target.value),
                            a = n.value,
                            u = n.number;
                        (l.value = a), (e.interestRate = u);
                    }),
                    l.addEventListener("blur", function (e) {
                        var t = r(e.target.value),
                            n = (t.value, t.number);
                        l.value = n ? n.toFixed(3) + "%" : "";
                    }),
                    document.getElementById("calc-button").addEventListener("click", function (n) {
                        for (var a = document.getElementsByName("loanTermOptions"), r = "month", u = 0; u < a.length; u++)
                            if (a[u].checked) {
                                r = a[u].value;
                                break;
                            }
                        var o = e.interestRate / 100 / 12;
                        "month" === r && (t = ((e.purchaseAmount - e.downPayment) * o) / (1 - Math.pow(1 + o, -1 * e.loanTerm))),
                            "year" === r && (t = ((e.purchaseAmount - e.downPayment) * o) / (1 - Math.pow(1 + o, 12 * e.loanTerm * -1))),
                            (document.getElementById("calculate-result-text").innerText = "$" + t.toLocaleString("en-US", { maximumFractionDigits: 2 })),
                            (document.getElementById("result-panel").style.visibility = "visible");
                    });
            })();
        },
        61: function (e, t, n) {},
    },
    [[28, 1, 2]],
]);
