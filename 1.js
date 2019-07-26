!function (t) {
    function n(o) {
        if (a[o])return a[o].exports;
        var i = a[o] = {"i": o, "l": !1, "exports": {}};
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }

    var a = {};
    n.m = t, n.c = a, n.i = function (t) {
        return t
    }, n.d = function (t, a, o) {
        n.o(t, a) || Object.defineProperty(t, a, {"configurable": !1, "enumerable": !0, "get": o})
    }, n.n = function (t) {
        var a = t && t.__esModule ? function () {
            return t["default"]
        } : function () {
            return t
        };
        return n.d(a, "a", a), a
    }, n.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
    }, n.p = "//om.gtimg.cn/om/om_3.0/build/", n(n.s = "H7XA")
}({
    "+ObC": function (t, n, a) {
        "use strict";
        t.exports = a("zudz")
    }, "/IsZ": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            var i = a(0), r = i.tool.utilsReport;
            return {
                "init": function () {
                    var t = {
                        "mousedown .getAuthCode": "phone_register_code",
                        "mousedown .getAuthCodeAgain": "phone_register_morecode",
                        "mousedown .tel-ui-checkbox": "phone_register_agree",
                        "mousedown .tel-submit": "phone_register_button",
                        "mousedown .switchToEmail": "phone_register_mail"
                    };
                    r.listen(t, "om_register", "phone_register").addToTest("phone_register.registerPub", t);
                    var n = {
                        "mousedown .email-ui-checkbox": "mail_register_agree",
                        "mousedown .email-submit": "mail_register_button",
                        "mousedown .switchToTelephone": "mail_register_phone"
                    };
                    r.listen(n, "om_register", "mail_register").addToTest("mail_register.registerPub", n);
                    var a = {
                        "mousedown #openEmail": "mail_activate_gotomail",
                        "mousedown #goBackEmail": "mail_activate_refill",
                        "mousedown #invokeEmail": "mail_activate_resend"
                    };
                    r.listen(a, "om_register", "mail_activate").addToTest("mail_activate.registerPub", a)
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "0": function (t, n) {
        t.exports = window.OM_BASE
    }, "0AgN": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = t.open;
            return n += '<div class="pop-body">\n    <div class="intro-box intro-box-copyright">\n        ', n += "set" === a ? '\n            <h3 class="text-center">确定使用水印？</h3>\n            <p class="help-block text-center">新上传的图片将带有会水印标记</p>\n        ' : '\n            <h3 class="text-center">确定不再使用水印？</h3>\n            <p class="help-block text-center">新上传的图片将不再带水印标记</p>\n        ', n += "\n    </div>\n    \x3c!-- intro-box/ --\x3e\n</div>\n"
        }
    }, "1": function (t, n) {
        t.exports = layer
    }, "1WV0": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            n.update = function (t) {
                return $.ajax({"url": "/watermark/Update", "method": "post", "dataType": "json", "data": t})
            }, n.get = function (t) {
                return $.ajax({"url": "/watermark/Get", "method": "get", "dataType": "json", "data": t})
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "1nSM": function (t, n, a) {
        var o = a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = o.$escape, i = t.phone;
            return n += '<div class="form-group form-group-phone">\n    <label for="" class="form-label label-person-set">验证码</label>\n    <div class="form-control">\n        <span class="form-static-text Fmobile">已绑定手机号：', n += a(i), n += '</span>\n    </div>\n    <label for="" class="form-label label-person-set"> </label>\n    <div class="form-control">\n        <label class="input-control">\n            <input  type="text"  class="authCode input-text valid wrong" value="">\n            <button type="button"  data-type="phone" class="btn btn-default getAuthCode">获取验证码</button>\n        </label>\n        <p class="help-block">请填写手机验证码</p>\n        <div class="succ-icon-set" style="position: initial;margin-top: 10px;">\n            <i class="icon icon-authCode"></i>\n            <span></span>\n        </div>\n    </div>\n</div>'
        }
    }, "2UNx": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", o = t.changetype, i = t.validType, r = (arguments[1], function (t) {
                return n += t
            });
            return n += '<div class="popupverifybox2" id="popupverifybox-orginization">\r\n\t<div class="pop-body">\r\n\t\t\t<div class="userinfo-form form-horizontal bind-phone-form verfiy-form-set">\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">联系人姓名</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-name wrong"  placeholder="">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写联系人姓名</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-name"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">身份证号后六位</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-id-last-six wrong" value="">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写联系人身份证号后六位</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-id-last-six"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">组织名称</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-org-name wrong"  placeholder="">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写组织名称</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-org-name"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">机构代码后六位</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-org-last-six wrong" value="">\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写组织机构代码后六位</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-org-last-six"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\t\t\t\t', "tel" != o && "contact" != o && "tel" != i || (n += "\r\n\t\t\t\t", r(a("1nSM")(t)), n += "\r\n\t\t\t\t"), n += "\r\n\t\t\t\t", "email" == o && (n += "\r\n\t\t\t\t", r(a("nB1T")(t)), n += "\r\n\t\t\t\t"), n += '\r\n\t\t\t\t<div class="pop-action">\r\n\t\t\t\t\t<button type="button" class="btn btn-primary disabled" id="identify-check-submit" disabled>下一步</button>\r\n\t\t\t\t\t<button type="button" class="btn btn-default" id="identify-check-cancel">取消</button>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t</div>\r\n\t\x3c!-- pop-body/ --\x3e\r\n</div>\r\n'
        }
    }, "48Hj": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            var i = a("uBq+"), r = a("GkPk"), s = a("zWxB"), l = a("la+8");
            return {
                "api": i, "errorCode": r, "getAuthCode": s, "report": function (t) {
                    l[t] && l[t].init()
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "5yR2": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            function i(t) {
                function n(n) {
                    var a, i;
                    return $.Deferred(function (r) {
                        m.open({
                            "type": 1,
                            "title": [n.title, "border-bottom:1px solid #e9eef4;"],
                            "closeBtn": 1,
                            "shadeClose": !0,
                            "area": ["660px", "455px"],
                            "content": l("phone/bind", {}),
                            "btn": ["确定", "取消"],
                            "success": function (n, o) {
                                i = $(".bind-phone-form"), i.find(".getAuthCode").off("click").on("click", function () {
                                    var t = $(this), n = i.find("input[name=phone]");
                                    f(t, n, {
                                        "apiName": "sendBindPhoneCode",
                                        "data": {"account": n.val(), "logintype": 2}
                                    })
                                });
                                try {
                                    a.destroy()
                                } catch (e) {
                                }
                                a = s(i, t)
                            },
                            "yes": function (n, s) {
                                if (i.valid()) {
                                    var l = i.find("input[name=phone]").val(), c = i.find("input[name=authCode]").val(),
                                        d = v.objectTrim({"phone": l, "verifycode": c});
                                    u.bindLoginPhone(d).then(function (n) {
                                        if ("0" == n.response.code) {
                                            m.msg("绑定成功", {"icon": 1});
                                            var a = n.data;
                                            t.phoneInfo.phone = a.phone || l, t.phoneInfo.canModify = a.canModify, t.phoneInfo.nextTime = a.nextTime || "", o.render()
                                        } else p[n.response.code] ? m.msg(p[n.response.code], {"icon": 2}) : "-10403" != n.response.code && m.msg("绑定失败（" + n.response.code + "）", {"icon": 2})
                                    });
                                    try {
                                        a.destroy()
                                    } catch (e) {
                                    }
                                    r.resolve(), m.close(n)
                                }
                            }
                        })
                    }).promise()
                }

                var a = $(".main"), o = this;
                this.eventBind = function () {
                    var n = this;
                    a.on("click", ".openAddPhone", n.handleTelChange);
                    var o = {
                        "registerType": fAccountType,
                        "login_phone": t.phoneInfo.phone,
                        "access": "accountSiginSettings",
                        "getPhoneAuthCode": function (t, n) {
                            f(t, n, {"apiName": "sendBindPhoneCode", "data": {"account": n.val(), "logintype": 2}})
                        },
                        "updateLoginPhone": function (a, o, i) {
                            u.bindLoginPhone({"phone": a, "verifycode": o}).then(function (o) {
                                if ("0" == o.response.code) {
                                    m.msg("修改成功", {"icon": 1});
                                    var r = o.data;
                                    t.phoneInfo.phone = r.phone || a, t.phoneInfo.canModify = r.canModify, t.phoneInfo.nextTime = r.nextTime || "", n.render(), m.close(i)
                                } else p[o.response.code] ? m.msg(p[o.response.code], {"icon": 2}) : -1 == o.response.code && m.msg("请输入手机号和验证码", {"icon": 2})
                            })
                        },
                        "sendBindEmailCode": u.sendBindEmailCode,
                        "bindLoginEmail": function (t) {
                            return $.ajax({
                                "type": "post",
                                "url": "/user/bindLoginEmail",
                                "dataType": "json",
                                "data": t
                            })
                        }
                    };
                    a.on("click", ".checkIdentifyBeforeChange", d.handleIdentifyBeforeChangeClick(o, {
                        "tel": function (e) {
                            var t = $(e.currentTarget).attr("data-value");
                            location.href = "/user/emailModify?changetype=tel&value=" + t
                        }, "email": function (e) {
                            var t = $(e.currentTarget).attr("data-value");
                            location.href = "/user/emailModify?changetype=email&value=" + t
                        }
                    })), a.on("click", ".bindQQBefore", d.handleIdentifyBeforeChangeClick($.extend(!0, o, {
                        "access": "accountSettings",
                        "handleIdentifySubmitSuccess": function (t) {
                            return function (t) {
                                0 == t.response.code ? location.href = "/article/QQAdminSet" : layer.msg("信息填写有误，请核对后重新输入！", {"icon": 2})
                            }
                        }
                    }), {}))
                }, this.handleTelChange = function (e) {
                    if (!h) {
                        n({"title": $(e.currentTarget).attr("title")})
                    }
                }, this.render = function () {
                    t.hasAccountSync = g_userStatus.hasAccountSync, a.html(l("accountSiginSettings", t))
                }
            }

            var r = a(0), s = a("Rru0"), l = a("O4X3"), c = a("48Hj"), d = a("igg1"), u = c.api, p = c.errorCode,
                f = c.getAuthCode, m = (r.component.placeholder, r.omlayer), v = r.tool.mess,
                h = "undefined" != typeof window.g_userStatus && window.g_userStatus.isInNoIdentifyWhiteList;
            return i
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "9HsW": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="pop-body">\n    <form class="form-horizontal bind-email-form">\n        <div class="form-horizontal">\n            <div class="form-group">\n                <label  class="form-label">邮箱</label>\n                <div class="form-control">\n                    <label class="input-control">\n                        <input type="text" class="input-text" id="email" name="email" value="">\n                    </label>\n                    <p class="help-block">请填写本人常用邮箱，该邮箱将作为登录ID，一个邮箱只能绑定一个企鹅号</p>\n                </div>\n            </div>\n            \x3c!-- form-group /--\x3e\n\n            <div class="form-group form-group-phone">\n                <label  class="form-label">验证码</label>\n                <div class="form-control">\n                    <label class="input-control">\n                        <input type="text" class="input-text" id="authCode" name="authCode" value="">\n                        <button type="button" class="btn btn-default getAuthCode">获取验证码</button>\n                    </label>\n                </div>\n            </div>\n            \x3c!-- form-group /--\x3e\n        </div>\n    </form>\n</div>\n\x3c!-- pop-body/ --\x3e'
        }
    }, "Au38": function (t, n, a) {
        function o(t, n, a) {
            return n in t ? Object.defineProperty(t, n, {
                "value": a,
                "enumerable": !0,
                "configurable": !0,
                "writable": !0
            }) : t[n] = a, t
        }

        var i;
        (i = function (t, n, i) {
            function r(t) {
                function n() {
                    return l.Deferred(function (t) {
                        layer.open({
                            "type": 1,
                            "title": ["绑定帐号", "border-bottom:1px solid #e9eef4;"],
                            "closeBtn": 1,
                            "shadeClose": !0,
                            "area": ["660px", "auto"],
                            "content": c("weiXin/bindConfirm", {}),
                            "btn": ["确定", "取消"],
                            "yes": function (n) {
                                layer.close(n), t.resolve()
                            }
                        })
                    }).promise()
                }

                function a(t) {
                    return l.Deferred(function (n) {
                        layer.open({
                            "type": 1,
                            "title": ["绑定失败", "border-bottom:1px solid #e9eef4;"],
                            "closeBtn": 1,
                            "shadeClose": !0,
                            "area": ["660px", "auto"],
                            "content": c("weiXin/isBind", {"userName": t}),
                            "btn": ["返回"],
                            "yes": function (t) {
                                layer.close(t), n.resolve()
                            }
                        })
                    }).promise()
                }

                var i = l(".main"), r = this;
                window.weiXinBindCheckCallback = function (o, i, s) {
                    switch (Number(o)) {
                        case 0:
                            n().then(function () {
                                layer.msg("绑定中…", {"icon": 4});
                                m.authorizeBindInner({"state": i}).then(function (n) {
                                    "0" == n.response.code ? (t.wxBindInfo.wx_nick = n.data.wx_nick, t.wxBindInfo.bind_stat = 1, r.render(), layer.msg("绑定成功", {"icon": 1})) : layer.msg("绑定失败", {"icon": 2})
                                }, function () {
                                    layer.msg("绑定失败", {"icon": 2})
                                })
                            });
                            break;
                        case 1:
                            a(s)
                    }
                }, this.eventBind = function () {
                    var n, a = (n = {
                        "registerType": fAccountType,
                        "getPhoneAuthCode": function (t, n) {
                            f(t, n, {"apiName": "sendBindPhoneCode", "data": {"account": n.val(), "logintype": 2}})
                        },
                        "access": "accountSettings",
                        "handleIdentifySubmitSuccessAsync": !1,
                        "bindWeixin": {
                            "handleIdentifySubmitSuccess": function (t) {
                                return function (n) {
                                    alert("已注入")
                                    if ("0" != n.response.code) {
                                        layer.close(t.IdentifyCheckLayer);
                                        (new v).openLoginNewWindow("bind")
                                    } else layer.msg("信息填写有误，请核对后重新输入！", {"icon": 2})
                                }
                            }
                        }
                    }, o(n, "handleIdentifySubmitSuccessAsync", !1), o(n, "unBindWeixin", {
                        "handleIdentifySubmitSuccess": function (n) {
                            return function (a) {
                                if (0 != a.response.code)return void layer.msg("信息填写有误，请核对后重新输入！", {"icon": 2});
                                layer.close(n.IdentifyCheckLayer), m.authorizeCancel({}).then(function (n) {
                                    "0" == n.response.code ? (t.wxBindInfo.bind_stat = 0, t.wxBindInfo.ifCanBind = 0, t.wxBindInfo.nextTime = n.data.nextTime, t.wxBindInfo.nextTime || (t.wxBindInfo.ifCanBind = 1), r.render(), layer.closeAll(), layer.msg("解绑成功", {"icon": 1})) : layer.msg("服务繁忙，请稍候重试", {"icon": 2})
                                }, function () {
                                    layer.msg("服务繁忙，请稍候重试", {"icon": 2})
                                })
                            }
                        }
                    }), n);
                    return i.on("click", ".weiXinBindLink", u.handleIdentifyBeforeChangeClick(a, {})), i.on("click", ".weiXinUnBindLink", u.handleIdentifyBeforeChangeClick(a, {})), this
                }, this.render = function () {
                    t.hasAccountSync = g_userStatus.hasAccountSync, i.html(d("accountSiginSettings", t))
                }
            }

            var s = a(0), l = s.$, c = s.componentTemplate, d = a("O4X3"), u = (a("1WV0"), a("igg1")), p = a("48Hj"),
                f = (s.component.placeholder, p.getAuthCode), m = (s.api.login, a("pkWZ")), v = s.component.WeixinLogin;
            s.tool.url, "undefined" != typeof window.g_userStatus && window.g_userStatus.isInNoIdentifyWhiteList;
            return r
        }.call(n, a, n, t)) !== undefined && (t.exports = i)
    }, "B1Yk": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            return {
                "cropUpload": function (t, n) {
                    t.isUpOrg = 1, $.ajax({
                        "type": "get",
                        "url": "/image/cropupload",
                        "data": t,
                        "dataType": "json",
                        "success": function (t) {
                            n && n(t)
                        },
                        "error": function (t) {
                            layer.msg("上传失败", {"icon": 2})
                        }
                    })
                },
                "originalLabelOpen": function (t, n) {
                    $.ajax({
                        "type": "post",
                        "url": "/mediaOriginal/ApplySubmit",
                        "data": t,
                        "dataType": "json",
                        "success": function (t) {
                            n && n(t)
                        }
                    })
                },
                "updateIntro": function (t, n) {
                    $.ajax({
                        "type": "post",
                        "url": "/userAuth/updateIntro",
                        "dataType": "json",
                        "data": t,
                        "error": function (t) {
                            layer.msg("帐号介绍更新失败", {"icon": 2})
                        },
                        "success": function (t) {
                            n && n(t)
                        }
                    })
                },
                "updateAvatar": function (t, n) {
                    $.ajax({
                        "type": "post",
                        "url": "/userAuth/updateAvatar",
                        "dataType": "json",
                        "data": t,
                        "error": function (t) {
                            layer.msg("头像更新失败", {"icon": 2})
                        },
                        "success": function (t) {
                            n && n(t)
                        }
                    })
                },
                "isRepeatName": function (t, n) {
                    $.ajax({
                        "type": "get",
                        "url": "/api/isRepeatName",
                        "data": t,
                        "dataType": "json",
                        "success": function (t) {
                            n && n(t)
                        }
                    })
                },
                "checkMediaName": function (t, n) {
                    t.medianame = t.name, $.ajax({
                        "type": "get",
                        "url": "/userReg/RegisterCheckName",
                        "data": t,
                        "dataType": "json",
                        "success": function (t) {
                            n && n(t)
                        }
                    })
                },
                "checkMediaIntro": function (t, n) {
                    $.ajax({
                        "type": "get",
                        "url": "/api/checkMediaIntro",
                        "data": t,
                        "dataType": "json",
                        "success": function (t) {
                            n && n(t)
                        }
                    })
                },
                "modifyUserBody": function (t, n) {
                    $.ajax({
                        "type": "post",
                        "url": "/userAuth/modifyUserBody",
                        "data": t,
                        "dataType": "json",
                        "success": function (t) {
                            n && n(t)
                        }
                    })
                },
                "updateIdentificationInfo": function (t) {
                    return $.ajax({
                        "type": "post",
                        "url": "/user/updateIdentificationInfo",
                        "data": t,
                        "dataType": "json"
                    })
                },
                "errorCode": {
                    "-64058": "验证码已过期，请重新获取",
                    "-64023": "验证码错误，请重新输入",
                    "-64071": "验证码输入错误次数过多，请稍后再试",
                    "-64072": "该手机号因多次违规，已被禁用",
                    "-64081": "该手机号已超限，1个手机号只能成为2个帐号的联系电话",
                    "-64300": "验证码校验失败",
                    "-64038": "60s内不允许重复发验证码"
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "C73V": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            var i = a(0), r = i.tool.utilsReport, s = a("bkt+");
            return {
                "init": function () {
                    s.init();
                    var t = {
                        "mousedown #goSelectMediaType": "accountDesc_register_change",
                        "mousedown #confirmMediaType": "accountDesc_register_confirm"
                    };
                    r.listen(t, "om_accountDesc", "accountDesc_register").addToTest("accountDesc.registerPub", t)
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "DK0j": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            a.exports = {
                "ACCOUNT_TYPE_MAP": {"0": "机构", "1": "个人", "2": "媒体", "3": "企业", "4": "政府", "5": "其他组织"},
                "InputKeyMapMethods": {
                    "name": {"validate": "validateName"},
                    "id-last-six": {"validate": "validateLastSix"},
                    "org-name": {"validate": "validateName"},
                    "org-last-six": {"validate": "validateLastSix"},
                    "ent-name": {"validate": "validateName"},
                    "ent-last-six": {"validate": "validateLastSix"},
                    "authCode": {"validate": "validAuthCode"}
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "DuR2": function (t, n) {
        var a;
        a = function () {
            return this
        }();
        try {
            a = a || Function("return this")() || (0, eval)("this")
        } catch (e) {
            "object" == typeof window && (a = window)
        }
        t.exports = a
    }, "F+WK": function (t, n, a) {
        var o = a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = o.$escape, i = t.name;
            return n += '<div class="pop-body no-b-p">\r\n<div class="form-horizontal  form-normal">\r\n\t<div class="form-group">\r\n\t\t<div class="form-label">现企鹅号名称</div>\r\n\t\t<div class="form-control">\r\n\t\t\t<p class="form-static-text">', n += a(i), n += '</p>\r\n\t\t</div>\r\n\t</div>\r\n\t\x3c!-- form-group /--\x3e\r\n\t<div class="form-group">\r\n\t\t<label for="MediaName" class="form-label">新企鹅号名称</label>\r\n\t\t<div class="form-control">\r\n\t\t\t<label class="input-control input-control-counter" id="penguinName_label">\r\n                <input type="text" class="input-text" id="penguinName_input" maxlength="30" value="">\r\n                <div class="count"><em id="penguinName_em">0</em>/<em>15</em></div>\r\n            </label>\r\n\t\t\t<p class="help-block">长度2-15个汉字，不能含有特殊符号、空格，详细规则查看<a target="_blank" href="//kf.om.qq.com/detail/381e0124-7beb-4cc2-9733-a52c1aeb137a">企鹅号命名规范</a></p>\r\n\t\t\t<p class="help-block error" id="penguinName_error"></p>\r\n\t\t</div>\r\n\t</div>\r\n\t\x3c!-- form-group /--\x3e\r\n\r\n</div>\r\n\x3c!-- modify-intro-form/ --\x3e\r\n<div class="intro-mod">\r\n\t<h3><i class="icon icon-function"></i>改名须知：</h3>\r\n\t<ol class="list-ol">\r\n\t\t<li>1个自然年内最多可修改2次（如2017年1月1日-2017年12月31日可修改2次）</li>\r\n\t\t<li>所修改的名称需在审核通过后生效</li>\r\n\t\t<li>新名称生效后，原名称将会被系统收回，其他用户可注册使用</li>\r\n\t\t<li>所修改的名称未通过审核，您将仍然使用原名称，您也可以重新修改，审核不通过的修改不占用修改次数</li>\r\n\t</ol>\r\n</div>\r\n</div>\r\n'
        }
    }, "GkPk": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            return {
                "-64000": "系统故障，请稍后重试",
                "-64002": "系统故障，请稍后重试",
                "-64003": "参数值不合法，请检查",
                "-64005": "系统故障，请稍后重试",
                "-64010": "该帐号已经注册，请登录",
                "-64011": "企鹅号名称重复",
                "-64012": "您不能使用该名称注册",
                "-64013": "企鹅号简介包含非法关键词",
                "-64022": "该帐号已经注册，请登录",
                "-64023": "验证码错误，请重新输入",
                "-64024": "激活邮件发送失败，请稍后重试",
                "-64025": "短信验证码发送失败，请稍后重试",
                "-64026": "该帐号已经注册，请登录",
                "-64027": "证件号码已被限制注册",
                "-64028": "证件号码已被注册超过2次",
                "-64029": "公安系统身份信息校验失败，请稍后重试",
                "-64030": "公安系统身份信息校验次数过多，请稍后重试",
                "-64031": "姓名、身份证号码校验不一致",
                "-64032": "暂不支持18周岁以下人群注册",
                "-64033": "该帐号尚未注册，请注册",
                "-64034": "密码错误",
                "-64035": "密码格式错误",
                "-64036": "邮箱格式错误",
                "-64037": "手机号码格式错误",
                "-64038": "60s内不允许重复发验证码",
                "-64039": "验证码发送次数过多，请10分钟后再试",
                "-64040": "企鹅号名称长度不符合要求",
                "-64041": "企鹅号简介长度不符合要求",
                "-64042": "暂不支持该类型帐号登录",
                "-64043": "该帐号已经注册，请登录",
                "-64044": "该手机号已被其他账号绑定，请更换手机号",
                "-64045": "该帐号已经注册，请登录",
                "-64046": "该帐号尚未注册，请注册",
                "-64047": "该帐号尚未注册，请注册",
                "-64048": "该帐号尚未注册，请注册",
                "-64050": "非常抱歉，您的修改次数过多，请重新注册",
                "-64051": "激活链接已失效，请重新验证",
                "-64052": "该帐号已经注册，请登录",
                "-64053": "该帐号已经注册，请登录",
                "-64055": "该帐号已经注册，请登录",
                "-61000": "该帐号已经注册，请登录",
                "-64201": "缺少监护人资料",
                "-64070": "该手机号被限制注册",
                "-64071": "验证码输入错误次数过多，请稍后再试",
                "-64058": "验证码已过期，请重新获取",
                "-64072": "该手机号因多次违规，已被禁用",
                "-64092": "未绑定管理员qq号",
                "-64300": "验证码校验失败",
                "-60001": "缺少参数",
                "-64200": "qq登录态校验失败",
                "-64081": "该手机号已超限，1个手机号只能成为2个帐号的联系电话",
                "-71012": "发送超限",
                "-71013": "发送超限",
                "-71014": "验证码失效",
                "-71015": "验证码故障",
                "-71016": "验证码过期",
                "-71017": "验证码错误",
                "-64093": "企鹅号名称已过期"
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "H7XA": function (t, n, a) {
        function o() {
            function t(t) {
                t.hasAccountSync = g_userStatus.hasAccountSync, s(".main").html(l("accountSiginSettings", t)), r()
            }

            var n = !1, a = new c(f), o = new d(f), i = new u(f);
            this.bizInit = function () {
                return this
            }, this.render = function () {
                n || (n = !0, t(f), a.eventBind(), o.eventBind(), i.eventBind())
            }
        }

        var i = a(0), r = i.component.tooltip, s = i.$, l = a("O4X3"), c = a("Au38"), d = a("5yR2"), u = a("jwNj"),
            p = "undefined" != typeof window.g_userStatus && window.g_userStatus.isInNoIdentifyWhiteList, f = {
                "user": window.g_userInfo,
                "statInfo": window.statInfo,
                "qqBindInfo": qqBindInfo,
                "wxBindInfo": window.wxBindInfo,
                "phoneInfo": window.phoneInfo,
                "haveLoginPwd": window.haveLoginPwd,
                "emailInfo": window.emailInfo,
                "isInNoIdentifyWhiteList": p
            };
        (new o).bizInit().render()
    }, "KOlX": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            function i(t) {
                function n(t) {
                    var n = $.trim(t.val());
                    n && c.checkEmail({"email": n}).done(function (a) {
                        0 != a.response.code && (d[a.response.code] ? (o[n] = {"msg": d[a.response.code]}, t.valid()) : "-10403" != a.response.code && (o[n] = {"msg": a.response.msg}, t.valid()))
                    })
                }

                var a, o = {};
                $.validator.addMethod("emailVerify", function (t, n, i) {
                    for (var r in o)if (t == r)return a = r, !1;
                    return !0
                }, function () {
                    return o[a]["msg"]
                }), t.on("keyup", function () {
                }).on("blur", function () {
                    n(t)
                })
            }

            function r(t) {
                i(t.find("input[name=email]"));
                var n = {
                    "debug": !0,
                    "errorElement": "p",
                    "errorClass": "error",
                    "focusCleanup": !0,
                    "onkeyup": !1,
                    "errorPlacement": function (t, n) {
                        n.parent().after(t)
                    },
                    "rules": {"email": {"required": !0, "emailVerify": !0, "email": !0}},
                    "messages": {"email": {"required": "邮箱不能为空", "email": "请输入正确邮箱"}}
                };
                return t.validate(n)
            }

            var s = a(0), l = a("48Hj"), c = a("uPxV"), d = (s.api, l.api, l.errorCode);
            return r
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "MDSi": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            var i = a(0), r = i.tool.utilsReport;
            return {
                "init": function () {
                    var t = {
                        "mousedown .omMediaAvatarBlock": "mediainfo_register_image",
                        "mousedown .preBtn": "mediainfo_register_pre",
                        "mousedown .tjBtn": "mediainfo_register_next",
                        "mousedown .icon-checkbox": "wechat",
                        "mousedown .btn-validate": "wechatverify",
                        "mousedown .formDomain>.chosen-container": "mediainfo_register_category"
                    };
                    r.listen(t, "om_mediainfo", "mediainfo_register").addToTest("mediainfo.registerPub", t)
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "N96+": function (t, n, a) {
        var o = a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = o.$escape, i = t.oldcontact;
            return n += '<div class="pop-body">\n    <div class="form-horizontal bind-email-form">\n        <div class="form-group form-group-phone">\n            <label for="" class="form-label label-person-set">现联系人姓名</label>\n            <div class="form-control">\n                <span class="form-static-text oldcontact">', n += a(i), n += '</span>\n            </div>\n        </div>\n        <div class="form-group form-group-phone">\n            <label for="" class="form-label label-person-set">身份证姓名</label>\n            <div class="form-control">\n                <label class="input-control">\n                    <input type="text" class="input-text input-name wrong"  placeholder="请填写身份证姓名" id="newIdCardName">\n                    <div class="succ-icon-set"><i class="icon icon-name"></i><span></span></div>\n                </label>\n                <p class="help-block">请填写新联系人的身份证姓名，名字中如果包含分隔号"·"，请完整输入</p>\n                <p class="help-block error"></p>\n            </div>\n        </div>\n        \x3c!-- form-group /--\x3e\n        <div class="form-group form-group-phone">\n            <label for="" class="form-label label-person-set">身份证号码</label>\n            <div class="form-control">\n                <label class="input-control">\n                    <input type="text" class="input-text input-id-last-six wrong" value="" placeholder="请填写身份证号码" id="newIdCardCode">\n                    <div class="succ-icon-set"><i class="icon icon-id-last-six"></i><span></span></div>\n                </label>\n                <p class="help-block"></p>\n                <p class="help-block error"></p>\n            </div>\n        </div>\n    </div>\n</div>'
        }
    }, "NGAw": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", o = t.changetype, i = t.validType, r = (arguments[1], function (t) {
                return n += t
            });
            return n += '<div class="popupverifybox2" id="popupverifybox-orginization">\n\t<div class="pop-body">\n\t\t\t<div class="userinfo-form form-horizontal bind-phone-form verfiy-form-set">\n\t\t\t\t<div class="form-group form-group-phone">\n\t\t\t\t\t<label for="" class="form-label label-person-set">联系人姓名</label>\n\t\t\t\t\t<div class="form-control">\n\t\t\t\t\t\t<label class="input-control">\n\t\t\t\t\t\t\t<input type="text" class="input-text input-name wrong"  placeholder="">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p class="help-block">请填写联系人姓名</p>\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-name"></i><span></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\x3c!-- form-group /--\x3e\n\n\t\t\t\t<div class="form-group form-group-phone">\n\t\t\t\t\t<label for="" class="form-label label-person-set">身份证号后六位</label>\n\t\t\t\t\t<div class="form-control">\n\t\t\t\t\t\t<label class="input-control">\n\t\t\t\t\t\t\t<input type="text" class="input-text input-id-last-six wrong" value="">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p class="help-block">请填写联系人身份证号后六位</p>\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-id-last-six"></i><span></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\x3c!-- form-group /--\x3e\n\n\t\t\t\t<div class="form-group form-group-phone">\n\t\t\t\t\t<label for="" class="form-label label-person-set">组织名称</label>\n\t\t\t\t\t<div class="form-control">\n\t\t\t\t\t\t<label class="input-control">\n\t\t\t\t\t\t\t<input type="text" class="input-text input-org-name wrong"  placeholder="">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p class="help-block">请填写组织名称</p>\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-org-name"></i><span></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\x3c!-- form-group /--\x3e\n\n\t\t\t\t<div class="form-group form-group-phone">\n\t\t\t\t\t<label for="" class="form-label label-person-set">机构代码后六位</label>\n\t\t\t\t\t<div class="form-control">\n\t\t\t\t\t\t<label class="input-control">\n\t\t\t\t\t\t\t<input type="text" class="input-text input-org-last-six wrong" value="">\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t</label>\n\t\t\t\t\t\t<p class="help-block">请填写组织机构代码后六位</p>\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-org-last-six"></i><span></span></p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t\x3c!-- form-group /--\x3e\n\t\t\t\t', "tel" != o && "contact" != o && "tel" != i || (n += "\n\t\t\t\t", r(a("1nSM")(t)), n += "\n\t\t\t\t"), n += "\n\t\t\t\t", "email" == o && (n += "\n\t\t\t\t", r(a("nB1T")(t)), n += "\n\t\t\t\t"), n += '\n\t\t\t\t<div class="pop-action">\n\t\t\t\t\t<button type="button" class="btn btn-primary disabled" id="identify-check-submit" disabled>下一步</button>\n\t\t\t\t\t<button type="button" class="btn btn-default" id="identify-check-cancel">取消</button>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t</div>\n\t\x3c!-- pop-body/ --\x3e\n</div>\n'
        }
    }, "O0qL": function (t, n, a) {
        function o(t) {
            return a(i(t))
        }

        function i(t) {
            var n = r[t];
            if (!(n + 1))throw new Error("Cannot find module '" + t + "'.");
            return n
        }

        var r = {
            "./accountSiginSettings.html": "gdjB",
            "./email/bind.html": "dYlN",
            "./email/goComfirm.html": "yTzd",
            "./email/newBind.html": "9HsW",
            "./phone/bind.html": "olbB",
            "./shuiyinSwitchConfirm.html": "0AgN"
        };
        o.keys = function () {
            return Object.keys(r)
        }, o.resolve = i, t.exports = o, o.id = "O0qL"
    }, "O4X3": function (t, n, a) {
        var o = function (t, n) {
            return a("O0qL")("./" + t + ".html")(n)
        };
        t.exports = o
    }, "Rru0": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            function i(t, n) {
                function a(t) {
                    if (t.valid()) {
                        var n = $.trim(t.val());
                        n && l.verifyAccount({"account": n, "logintype": 2}).done(function (a) {
                            if (0 != a.response.code)if (c[a.response.code]) {
                                var o = c[a.response.code];
                                "该帐号已经注册，请登录" == o && (o = "该手机号已被其他帐号绑定，请更换手机号"), i[n] = {"msg": o}, t.valid()
                            } else"-10403" != a.response.code && (i[n] = {"msg": a.response.msg}, t.valid())
                        })
                    }
                }

                var o, i = {};
                $.validator.addMethod("phoneVerify", function (t, n, a) {
                    for (var r in i)if (t == r)return o = r, !1;
                    return !0
                }, function () {
                    return i[o]["msg"]
                }), $.validator.addMethod("samePhone", function (t, a, o) {
                    return $.trim(t) != n.phoneInfo.phone
                }), t.off("keyup").on("keyup", function () {
                }).off("blur").on("blur", function () {
                    a(t)
                })
            }

            function r(t, n) {
                i(t.find("input[name=phone]"), n);
                var a = {
                    "debug": !0,
                    "errorElement": "p",
                    "errorClass": "error",
                    "focusCleanup": !0,
                    "onkeyup": !1,
                    "errorPlacement": function (t, n) {
                        n.parent().after(t)
                    },
                    "rules": {
                        "phone": {"required": !0, "phoneVerify": !0, "mobilephone": !0, "samePhone": !0},
                        "authCode": {"required": !0}
                    },
                    "messages": {
                        "phone": {
                            "required": "手机号码不能为空",
                            "mobilephone": "请输入正确手机号",
                            "samePhone": "您当前已绑定此手机号，请更换手机号"
                        }, "authCode": {"required": "验证码不能为空"}
                    }
                };
                return t.validate(a)
            }

            var s = a("48Hj"), l = s.api, c = s.errorCode;
            return r
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "S+uz": function (t, n, a) {
        var o = a(1), i = a("t/mI"), r = function () {
            function t(t, a, o) {
                t.addClass("waiting"), a >= 0 && t.html('<span class="second-num">' + a + "</span>秒后重发"), n = setInterval(function () {
                    a -= 1, a >= 0 ? t.html('<span class="second-num">' + a + "</span>秒后重发") : (clearInterval(n), t.removeClass("waiting").addClass(".getAuthCodeAgain").html("重新获取"), o.canRequest = !0)
                }, 1e3)
            }

            var n, a = {};
            return function (n, r, s, l, c, d) {
                if (!n.hasClass("waiting")) {
                    var u = a[s], p = $.trim(r.val()), f = r.accountType || 2;
                    if (d = d || function (t) {
                                o.msg(t, {"icon": 2})
                            }, !r.valid || r.valid()) {
                        if (2 == f && !i.phone.test(p))return void d("手机号格式不正确");
                        if (1 == f && !i.email.test(p))return void d("邮箱格式不正确");
                        if (!u || u.canRequest) $.post(s, l, function (i) {
                            if ("0" == i.response.code) {
                                try {
                                    if (!1 === a[s].canRequest)return !1
                                } catch (e) {
                                }
                                o.msg("验证码已发送", {"icon": 1}), u || (u = a[s] = {"second": 60}), u.startTime = (new Date).getTime(), u.canRequest = !1;
                                var r = Math.floor(((new Date).getTime() - u.startTime) / 1e3);
                                t(n, u.second - r, u)
                            } else c[i.response.code] ? d(c[i.response.code]) : "-10403" != i.response.code && d("获取验证码发送异常（" + i.response.code + "）")
                        }, "json"); else {
                            var m = Math.floor(((new Date).getTime() - u.startTime) / 1e3);
                            o.msg(u.second - m + "秒后才能重发验证码", {"icon": 2})
                        }
                    }
                }
            }
        }();
        t.exports = r
    }, "SPyy": function (t, n, a) {
        var o = a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = o.$escape, i = t.access;
            return n += '<div class="form-horizontal  bind-phone-form" style="margin-top:20px;">\r\n\t<div class="form-group form-group-phone">\r\n\t\t<label for="Phone" class="form-label">手机号</label>\r\n\t\t<div class="form-control">\r\n\t\t\t<label class="input-control">\r\n\t\t\t\t<input type="text" class="input-text" id="phone" value="">\r\n\t\t\t\t<button type="button" class="btn btn-default getCaptureBtn">获取验证码</button>\r\n\t\t\t</label>\r\n\t\t\t<p class="help-block error" id="phone_error"></p>\r\n\t\t\t<p class="help-block tip_mobile">请填写要修改的手机号', n += a("accountSiginSettings" === i ? ",该手机号将作为登录ID，一个手机号只能绑定一个企鹅号" : ""), n += '</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="form-group">\r\n\t\t<label for="Phone" class="form-label">验证码</label>\r\n\t\t<div class="form-control">\r\n\t\t\t<label class="input-control">\r\n\t\t\t\t<input type="text" class="input-text" id="capture" value="">\r\n\t\t\t</label>\r\n\t\t\t<p class="help-block error" id="capture_error"></p>\r\n\t\t</div>\r\n\t</div>\r\n\t\x3c!-- form-group /--\x3e\r\n</div>\r\n'
        }
    }, "SWk9": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            var i = a(0), r = i.tool.utilsReport;
            return {
                "init": function () {
                    var t = {"mousedown .preBtn": "mediaBodyInfo_pre", "mousedown .tjBtn": "mediaBodyInfo_next"};
                    switch (Number(Window.mediaBodyInfoData)) {
                        case 1:
                            t["mousedown .opPersonPicBlock"] = "mediaBodyInfo_personal_image", t["mousedown .opIdCardPicBlock"] = "mediaBodyInfo_personal_id";
                            break;
                        case 2:
                            t["mousedown .opPersonPicBlock"] = "mediaBodyInfo_media_image", t["mousedown .opIdCardPicBlock"] = "mediaBodyInfo_media_id", t["mousedown .mainMediaCodePicBlock"] = "mediaBodyInfo_media_mediaid";
                            break;
                        case 3:
                            t["mousedown .opPersonPicBlock"] = "mediaBodyInfo_company_image", t["mousedown .opIdCardPicBlock"] = "mediaBodyInfo_company_id", t["mousedown .mainCompanyCodePicBlock"] = "mediaBodyInfo_company_companyid";
                            break;
                        case 4:
                            t["mousedown .opPersonPicBlock"] = "mediaBodyInfo_gov_image", t["mousedown .opIdCardPicBlock"] = "mediaBodyInfo_gov_id", t["mousedown .mainGovCodePicBlock"] = "mediaBodyInfo_gov_govid", t["mousedown .mainGovDocumentPicBlock"] = "mediaBodyInfo_gov_govdoc";
                            break;
                        case 5:
                            t["mousedown .opPersonPicBlock"] = "mediaBodyInfo_organization_image", t["mousedown .opIdCardPicBlock"] = "mediaBodyInfo_organization_id", t["mousedown .mainOtherCodePicBlock"] = "mediaBodyInfo_organization_organizationid"
                    }
                    r.listen(t, "om_mediaBodyInfo", "mediaBodyInfo_register").addToTest("mediaBodyInfo.registerPub", t)
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "U/LJ": function (t, n, a) {
        var o = function (t, n) {
            return a("eOBz")("./" + t + ".html")(n)
        };
        t.exports = o
    }, "YuNy": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", o = t.changetype, i = t.validType, r = (arguments[1], function (t) {
                return n += t
            });
            return n += '<div class="popupverifybox" id="popupverifybox-self">\r\n\t<div class="pop-body">\r\n\t\t\t<div class="form-horizontal bind-phone-form verfiy-form-set">\r\n\t\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t\t<label for="" class="form-label label-person-set">注册人姓名</label>\r\n\t\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t\t<input type="text" class="input-text input-name wrong"  placeholder="">\r\n\t\t\t\t\t\t\t\t\x3c!-- <div class="succ-icon-set"><i class="icon icon-name"></i><span></span></div> --\x3e\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<p class="help-block">请填写注册人姓名</p>\r\n\t\t\t\t\t\t\t<p class="help-block error"><i class="icon-name"></i><span></span></p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- form-group /--\x3e\r\n\r\n\t\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t\t<label for="" class="form-label label-person-set">身份证号后六位</label>\r\n\t\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t\t<input type="text" class="input-text input-id-last-six wrong" value="">\r\n\t\t\t\t\t\t\t\t\x3c!-- <div class="succ-icon-set"><i class="icon icon-id-last-six"></i><span></span></div> --\x3e\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<p class="help-block">请填写注册人身份证号后六位</p>\r\n\t\t\t\t\t\t\t<p class="help-block error"><i class="icon-id-last-six"></i><span></span></p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\x3c!-- form-group /--\x3e\r\n\t\t\t\t\t', "tel" != o && "contact" != o && "tel" != i || (n += "\r\n\t\t\t\t\t", r(a("1nSM")(t)), n += "\r\n\t\t\t\t\t"), n += "\r\n\t\t\t\t\t", "email" == o && (n += "\r\n\t\t\t\t\t", r(a("nB1T")(t)), n += "\r\n\t\t\t\t\t"), n += '\r\n\t\t\t\t\t<div class="pop-action">\r\n\t\t\t\t\t\t<button type="button" class="btn btn-primary disabled" disabled id="identify-check-submit">下一步</button>\r\n\t\t\t\t\t\t<button type="button" class="btn btn-default" id="identify-check-cancel">取消</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t\t</div>\r\n\t</div>\r\n\t\x3c!-- pop-body/ --\x3e\r\n</div>\r\n'
        }
    }, "bkt+": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            var i = a(0), r = i.tool.utilsReport;
            return {
                "init": function () {
                    var t = {
                        "mousedown div[mediaType='1']": "mediaType_personal_icon",
                        "mousedown div[mediaType='2']": "mediaType_media_icon",
                        "mousedown div[mediaType='3']": "mediaType_company_icon",
                        "mousedown div[mediaType='4']": "mediaType_gov_icon",
                        "mousedown div[mediaType='5']": "mediaType_organization_icon",
                        "mousedown a[mediaType='1']": "mediaType_personal_button",
                        "mousedown a[mediaType='2']": "mediaType_media_button",
                        "mousedown a[mediaType='3']": "mediaType_company_button",
                        "mousedown a[mediaType='4']": "mediaType_gov_button",
                        "mousedown a[mediaType='5']": "mediaType_organization_button"
                    };
                    r.listen(t, "om_mediaType", "om_mediaType").addToTest("mediaType.registerPub", t)
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "dF8+": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", o = t.changetype, i = t.validType, r = (arguments[1], function (t) {
                return n += t
            });
            return n += '<div class="popupverifybox3" id="popupverifybox-enterprise">\r\n\t<div class="pop-body">\r\n\t\t\t<div class="form-horizontal bind-phone-form verfiy-form-set">\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">联系人姓名</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-name wrong"  placeholder="">\r\n\t\t\t\t\t\t\t\x3c!-- <div class="succ-icon-set"><i class="icon icon-name"></i><span></span></div> --\x3e\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写联系人姓名</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-name"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">身份证号后六位</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-id-last-six wrong" value="">\r\n\t\t\t\t\t\t\t\x3c!-- <div class="succ-icon-set"><i class="icon icon-id-last-six"></i><span></span></div> --\x3e\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写联系人身份证号后六位</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-id-last-six"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">企业名称</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-ent-name wrong"  placeholder="">\r\n\t\t\t\t\t\t\t\x3c!-- <div class="succ-icon-set"><i class="icon icon-ent-name"></i><span></span></div> --\x3e\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写企业名称</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-ent-name"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\r\n\t\t\t\t<div class="form-group form-group-phone">\r\n\t\t\t\t\t<label for="" class="form-label label-person-set">营业执照后六位</label>\r\n\t\t\t\t\t<div class="form-control">\r\n\t\t\t\t\t\t<label class="input-control">\r\n\t\t\t\t\t\t\t<input type="text" class="input-text input-ent-last-six wrong" value="">\r\n\t\t\t\t\t\t\t\x3c!-- <div class="succ-icon-set"><i class="icon icon-ent-last-six"></i><span></span></div> --\x3e\r\n\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t<p class="help-block">请填写企业营业执照注册号后六位</p>\r\n\t\t\t\t\t\t<p class="help-block error"><i class="icon-ent-last-six"></i><span></span></p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\x3c!-- form-group /--\x3e\r\n\t\t\t\t', "tel" != o && "contact" != o && "tel" != i || (n += "\r\n\t\t\t\t", r(a("1nSM")(t)), n += "\r\n\t\t\t\t"), n += "\r\n\t\t\t\t", "email" == o && (n += "\r\n\t\t\t\t", r(a("nB1T")(t)), n += "\r\n\t\t\t\t"), n += '\r\n\t\t\t\t<div class="pop-action">\r\n\t\t\t\t\t<button type="button" class="btn btn-primary disabled" disabled id="identify-check-submit">下一步</button>\r\n\t\t\t\t\t<button type="button" class="btn btn-default" id="identify-check-cancel">取消</button>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t</div>\r\n\t\x3c!-- pop-body/ --\x3e\r\n</div>\r\n'
        }
    }, "dYlN": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="pop-body">\r\n    <form class="form-horizontal bind-email-form">\r\n        <div class="form-horizontal">\r\n            <div class="form-group">\r\n                <label for="UserEmail" class="form-label">邮箱</label>\r\n                <div class="form-control">\r\n                    <label class="input-control">\r\n                        <input type="text" name="email" class="input-text" id="UserEmail" value="">\r\n                    </label>\r\n                    <p class="help-block">请填写本人常用邮箱，激活后可作为登录ID，一个邮箱只能绑定一个企鹅号</p>\r\n                </div>\r\n            </div>\r\n            \x3c!-- form-group /--\x3e\r\n            <div class="form-action">\r\n                <div  class="btn submit btn-primary">发送验证链接</div>\r\n            </div>\r\n        </div>\r\n    </form>\r\n</div>'
        }
    }, "e7U+": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '\x3c!-- 此文件被舍弃，老中医鉴定 --\x3e\r\n<div class="pop-body">\r\n    <div style="padding-left:30px;line-height: 24px;">\r\n        <p style="padding-bottom:12px">\r\n            <b>注意事项：</b>\r\n        </p>\r\n        <ul>\r\n            <li class="text-dark">1、主体类型修改支持4级、5级媒体</li>\r\n            <li class="text-dark">2、主体类型修改每自然年可以修改3次（审核通过或者失败均算次数）</li>\r\n            <li class="text-dark">3、主体类型修改支持个人、企业、媒体、其他组织，修改为媒体或者企业</li>\r\n            <li class="text-dark">4、主体修改审核通过后，已绑定银行卡的，需重新填写银行卡信息，未提取的金额将归修改后的主体所有</li>\r\n            <li class="text-dark">5、修改资料提交后，我们将在3个工作日内反馈结果</li>\r\n            <li class="text-dark">6、企鹅号的使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖</li>\r\n        </ul>\r\n    </div>\r\n</div>'
        }
    }, "eOBz": function (t, n, a) {
        function o(t) {
            return a(i(t))
        }

        function i(t) {
            var n = r[t];
            if (!(n + 1))throw new Error("Cannot find module '" + t + "'.");
            return n
        }

        var r = {
            "./body-change-layer.html": "e7U+",
            "./body-change-switch-layer.html": "oTAG",
            "./check-block-email.html": "nB1T",
            "./check-block-phone.html": "1nSM",
            "./check-identity-enterprise-layer.html": "dF8+",
            "./check-identity-gov-layer.html": "v12k",
            "./check-identity-media-layer.html": "NGAw",
            "./check-identity-orginization-layer.html": "2UNx",
            "./check-identity-self-layer.html": "YuNy",
            "./modify-contact-layer.html": "N96+",
            "./modify-email-layer.html": "vXNq",
            "./modify-intro-form.html": "oOWc",
            "./modify-mobile-layer.html": "SPyy",
            "./modify-penguinName-layer.html": "F+WK"
        };
        o.keys = function () {
            return Object.keys(r)
        }, o.resolve = i, t.exports = o, o.id = "eOBz"
    }, "gdjB": function (t, n, a) {
        var o = a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = t.hasAccountSync, i = t.isInNoIdentifyWhiteList, r = t.haveLoginPwd, s = t.phoneInfo,
                l = o.$escape, c = t.statInfo, d = t.emailInfo, u = t.user, p = t.qqBindInfo, f = t.wxBindInfo;
            return n += '<div class="main-heading">\n    <h2>帐号设置</h2>\n</div>\n<ul class="tab clearfix">\n    <li><a href="/article/accountSettings" class="tab-text">帐号详情</a></li>\n    <li class="active"><span class="tab-text">登录设置</span></li>\n    <li><a href="/article/accountFeatureSettings" class="tab-text">功能设置</a></li>\n    ', a && (n += '\n    <li><a href="/account/sync" class="tab-text">同步开通帐号</a></li>\n    '), n += "\n</ul>\n\n", i ? n += '\n<div class="alert alert-normal">\n    <div class="alert-left">\n        <i class="icon icon-info-b"></i>\n        <strong class="text-title">提示：</strong>\n    </div>\n    <div class="alert-content">\n        您的帐号资质未补全，为了保障您的帐号安全，我们将对您的帐号信息进行锁定保护，如需修改请联系平台在线客服。\n    </div>\n</div>\n' : 1 == r && (n += '\n<div class="alert alert-normal">\n    <div class="alert-left">\n        <i class="icon icon-info-b"></i>\n        <strong class="text-title">提示：</strong>\n    </div>\n    <div class="alert-content">\n        腾讯内容开放平台支持手机号、邮箱、QQ、微信登录\n    </div>\n</div>\n'), n += '\n\n<div class="form-horizontal login-info-form">\n\n    ', 1 == r && (n += '\n    \x3c!-- 登录手机号 --\x3e\n    <div class="form-group">\n        <label class="form-label">\n            <span class="label-login label-login-phone"><i class="icon icon-label-phone"></i></span>登录手机\n        </label>\n        ', s && s.phone ? (n += '\n        <div class="form-control">\n            <p class="form-static-text login-phone-text">', n += l(s.phone), n += "</p>\n        </div>\n            \x3c!-- ", 1 == s.canModify ? (n += '\n            <div class="form-edit-option">\n                <a href="javascript:void(0)" class="link checkIdentifyBeforeChange login-phone-edit ', n += l(i ? "disabled" : ""), n += '" title="修改" name="tel" data-value="', n += l(s.phone), n += '">修改</a>\n                <p class="text-dark">一个月内只能申请修改一次</p>\n            </div>\n            ') : (n += '\n            <div class="form-edit-option">\n                <p class="text-dark">下次申请修改日期为：', n += l(s.nextTime), n += "</p>\n            </div>\n            "), n += " --\x3e\n        ") : (n += '\n        <div class="form-control">\n            <p class="form-static-text">暂无</p>\n        </div>\n        <div class="form-edit-option">\n            \x3c!-- <a href="javascript:void(0)" class="link openAddPhone ', n += l(i ? "disabled" : ""), n += '" title="绑定" name="tel">绑定</a>\n            <p class="text-dark">一个手机号只能绑定一个企鹅号，验证后可作为登录ID</p> --\x3e\n        </div>\n        '), n += "\n    </div>\n    "), n += "\n\n    ", 1 == r && (n += '\n    \x3c!-- 登录邮箱 --\x3e\n    <div class="form-group">\n        <label class="form-label">\n            <span class="label-login label-login-email"><i class="icon icon-label-email"></i></span>登录邮箱\n        </label>\n        ', c && c.nowEmail ? (n += '\n            <div class="form-control">\n                <p class="form-static-text Femail">', n += l(c.nowEmail), n += "</p>\n            </div>\n            \x3c!-- ", "1" == d.canModify ? (n += '\n            <div class="form-edit-option">\n                <a class="link checkIdentifyBeforeChange ', n += l(i ? "disabled" : ""), n += '" title="修改" name="email" data-value="', n += l(u.email), n += '" id="emailModify">修改</a>\n                <p class="text-dark">一个月内只能申请修改一次</p>\n            </div>\n            ') : (n += '\n            <div class="form-edit-option">\n                <p class="text-dark">下次申请修改日期为：', n += l(d.nextTime), n += "</p>\n            </div>\n            "), n += " --\x3e\n        ") : (n += '\n            <div class="form-control">\n                <p class="form-static-text">暂无</p>\n            </div>\n            <div class="form-edit-option">\n                \x3c!-- <a class="link openAddEmail ', n += l(i ? "disabled" : ""), n += '" title="绑定">绑定</a>\n                <p class="text-dark">一个月内只能申请修改一次</p> --\x3e\n            </div>\n        '), n += "\n    </div>\n    "), n += '\n\n    \x3c!-- 登录QQ --\x3e\n    <div class="form-group open">\n        <label class="form-label">\n            <span class="label-login label-login-qq"><i class="icon icon-label-qq"></i></span>登录QQ\n        </label>\n        <div class="form-control">\n            <p class="form-static-text">', n += l(p.qq ? p.qq : "暂无"), n += '</p>\n        </div>\n        <div class="form-edit-option">\n            \x3c!-- 可以绑定 --\x3e\n            ', 1 == p.canModify ? (n += "\n                ", i ? n += '\n                    \x3c!-- 不在名单内，绑定置灰 --\x3e\n                    <a href= "javascript:void(0)" class="link disabled">绑定</a>\n                ' : (n += '  \n                    <a data-href= "', n += l("/article/QQAdminSet"), n += '" class="link bindQQBefore" data-title="身份验证" data-valid-type="tel" name="bindQQ">\n                        ', n += l(p.qq ? "换绑" : "绑定"), n += "\n                    </a>                \n                "), n += "\n            ") : (n += '\n            <p class="text-dark">下次申请修改日期为：', n += l(p.nextTime), n += "</p>\n            "), n += '\n            <div class="text-dark">', n += l(p.qq ? "登录QQ作为管理员QQ，享受多重特权" : "绑定QQ后可享有：企鹅号快捷登录、视频上传发布权益"), n += "</div>\n        </div>\n    </div>\n\n\n    \x3c!-- 微信号未绑定，且可绑定 --\x3e\n    ", 0 == f.bind_stat && 1 == f.ifCanBind && (n += '\n    <div class="form-group">\n        <label class="form-label">\n            <span class="label-login label-login-weixin"><i class="icon icon-label-weixin"></i></span>登录微信\n        </label>\n        <div class="form-control">\n            <p class="form-static-text">暂无</p>\n        </div>\n        <div class="form-edit-option">\n            <a href="javascript:void(0);" data-title="身份验证" data-valid-type="tel" name="bindWeixin" class="link weiXinBindLink ', n += l(i ? "disabled" : ""), n += '">绑定</a>\n            <p class="text-dark">绑定后可使用微信扫码登录腾讯内容开放平台</p>\n        </div>\n    </div>\n    '), n += "\n\n    \x3c!-- 微信号未绑定，暂时也不能绑定 --\x3e\n    ", 0 == f.bind_stat && 0 == f.ifCanBind && (n += '\n\t<div class="form-group">\n\t\t<label class="form-label">\n\t\t\t<span class="label-login label-login-weixin"><i class="icon icon-label-weixin"></i></span>登录微信\n\t\t</label>\n\t\t<div class="form-control">\n\t\t\t<p class="form-static-text">暂无</p>\n\t\t</div>\n\t\t<div class="form-edit-option">\n\t\t\t<p class="text-dark">下次申请修改日期为：', n += l(f.nextTime), n += "</p>\n\t\t</div>\n\t</div>\n    "), n += "\n\n    \x3c!-- 微信号已绑定，解绑无时间限制，可以立即解绑 --\x3e\n    ", 1 == f.bind_stat && (n += '\n    <div class="form-group">\n        <label class="form-label">\n            <span class="label-login label-login-weixin"><i class="icon icon-label-weixin"></i></span>登录微信\n        </label>\n        <div class="form-control">\n            <p class="form-static-text">', n += l(f.wx_nick), n += '</p>\n        </div>\n        <div class="form-edit-option">\n            <a href="javascript:void(0);" data-title="身份验证" data-valid-type="tel" name="unBindWeixin" class="link weiXinUnBindLink ', n += l(i || !p.qq ? "disabled" : ""), n += '">解绑</a>\n            <p class="text-dark">一个微信只能绑定一个企鹅号</p>\n        </div>\n    </div>\n    '), n += "\n\n</div>\n\n\n"
        }
    }, "igg1": function (t, n, a) {
        var o, i = a("DK0j"), r = a("U/LJ"), s = a("B1Yk"), l = a(0), c = a("zWxB"), d = a("S+uz"),
            u = l.component.constantVar, p = u.getErrCode() || {}, f = i.InputKeyMapMethods, m = null, v = null,
            h = null, b = null,
            y = "undefined" != typeof window.g_userStatus && window.g_userStatus.isInNoIdentifyWhiteList,
            g = {"phone": "手机号", "capture": "验证码"}, x = {"phone": /^1\d{10}$/, "capture": /^\d{6}$/},
            k = window.login_phone || window.bohui && window.bohui.login_phone || "", C = {
                "accountSettings": {
                    "getAuthCodeApi": {
                        "phone": "/user/SendCurContactMobileCode",
                        "email": "/user/SendCurrContactEmailCode"
                    },
                    "validAuthCodeApi": {
                        "phone": "/user/VerifyCurrContactMobileCode",
                        "email": "/user/VerifyCurrContactEmailCode"
                    }
                },
                "accountSiginSettings": {
                    "getAuthCodeApi": {
                        "phone": "/user/SendLoginMobileCode",
                        "email": "/user/SendLoginEmailCode"
                    }, "validAuthCodeApi": {"phone": "/user/VerifyLoginMobileCode", "email": "/user/VerifyLoginEmailCode"}
                }
            };
        (o = function (t, n, a) {
            a.exports = {
                "validPhoneCapt": function (t, n) {
                    var a = {
                        "phone": $(".bind-phone-form #phone_error"),
                        "capture": $(".bind-phone-form #capture_error")
                    }, o = $.trim(t.val());
                    return o ? x[n].test(o) ? (a[n].html(""), !0) : (a[n].html(g[n] + "格式不对！"), !1) : (a[n].html(g[n] + "不能为空！"), !1)
                }, "validEmail": function (t) {
                    var n = $.trim(t);
                    return n ? /^\w+([._-]\w+)*@([\w-]+\.)+\w+$/.test(n) ? "success" : "邮箱格式不正确" : "邮箱不能为空"
                }, "validCapture": function (t) {
                    var n = $.trim(t);
                    return n ? /^\d{6}$/.test(n) ? "success" : "验证码格式不正确" : "验证码不能为空"
                }, "countDown": function (t, n) {
                    t.addClass("waiting"), n >= 0 && t.html('<span class="second-num">' + n + "</span>秒后重发");
                    var a = setInterval(function () {
                        n -= 1, n >= 0 ? t.html('<span class="second-num">' + n + "</span>秒后重发") : (clearInterval(a), t.removeClass("waiting").addClass("getAuthCodeAgain").html("重新获取"))
                    }, 1e3)
                }, "handleTelModifySubmitSuccess": function () {
                    return function (t) {
                        if (0 == t.response.code) {
                            layer.msg("修改成功！", {"icon": 1});
                            var n = $(".bind-phone-form #phone").val();
                            $(".form-static-text.Fmobile").html(n.substr(0, 3) + "****" + n.substr(7)), $("#telModify").parent().hide(), setTimeout(function () {
                                layer.close(m)
                            }, 300)
                        } else-64058 === t.response.code ? layer.msg("验证码已过期，请重新获取", {"icon": 2}) : -64023 === t.response.code ? layer.msg("验证码错误，请重新输入", {"icon": 2}) : -64071 === t.response.code ? layer.msg("验证码输入错误次数过多，请稍后再试", {"icon": 2}) : -64072 === t.response.code ? layer.msg("该手机号因多次违规，已被禁用", {"icon": 2}) : -64081 === t.response.code ? layer.msg("该手机号已超限，1个手机号只能成为2个帐号的联系电话", {"icon": 2}) : -64300 === t.response.code ? layer.msg("验证码校验失败", {"icon": 2}) : layer.msg("修改失败！", {"icon": 2})
                    }
                }, "handleTelModifyYes": function () {
                    var t = this;
                    return function () {
                        if (t.validPhoneCapt($(".bind-phone-form #phone"), "phone")) {
                            var n = "", a = $.trim($(".bind-phone-form #phone").val()), o = {"mobile": a};
                            if (a != k || "accountSettings" != t.info.access) {
                                if (!t.validPhoneCapt($(".bind-phone-form #capture"), "capture"))return;
                                n = $.trim($(".bind-phone-form #capture").val()), o.code = n
                            }
                            "accountSettings" == t.info.access ? $.ajax({
                                "type": "get",
                                "url": "/userAuth/updateMobile",
                                "data": o,
                                "dataType": "json",
                                "success": t.handleTelModifySubmitSuccess(),
                                "error": function () {
                                    layer.msg("修改失败！", {"icon": 2})
                                }
                            }) : t.info.updateLoginPhone && t.info.updateLoginPhone(a, n, m)
                        }
                    }
                }, "handleTelModifySuccess": function () {
                    var t = this;
                    return function () {
                        $(".bind-phone-form .btn-default").on("click", function () {
                            var n = $(".bind-phone-form #phone");
                            t.validPhoneCapt(n, "phone") && (n.valid = !1, "accountSettings" == t.info.access ? c($(this), n, {
                                "apiName": "getMobileCapture",
                                "data": {"mobile": n.val(), "from": "modify"}
                            }) : t.info.getPhoneAuthCode && t.info.getPhoneAuthCode($(this), n))
                        }), $(".bind-phone-form #phone").on("keyup", function () {
                            var n = $.trim($(this).val()), a = ".bind-phone-form .form-group-phone";
                            if (!/^1[3|4|5|7|8][0-9]{9}$/.test(n))return void $(a).find(".tip_mobile").html("请填写要修改的手机号");
                            n == k ? ("accountSettings" == t.info.access && ($(this).width("100%"), $(a).find(".btn-default").hide(), $(a).find("#phone_error").html(""), $(a).next().hide().find("#capture_error").html("")), $(a).find(".tip_mobile").html("该手机号为注册手机号")) : ($(this).width("65%"), $(a).find(".btn-default").show(), $(a).find("#phone_error").html(""), $(a).find(".tip_mobile").html("请填写要修改的手机号"), $(a).next().show().find("#capture_error").html(""))
                        })
                    }
                }, "handleTelModifyClick": function () {
                    var t = this;
                    m = layer.open({
                        "type": 1,
                        "title": ["修改手机号", "border-bottom:1px solid #e9eef4;"],
                        "area": ["800px", "380px"],
                        "content": r("modify-mobile-layer", {"access": t.info.access}),
                        "btn": ["确认修改", "取消"],
                        "success": t.handleTelModifySuccess(),
                        "yes": t.handleTelModifyYes()
                    })
                }, "handleEmailModifySubmitSuccess": function (t) {
                    return function (n) {
                        if ("0" == n.response.code) layer.msg("修改邮箱成功", {"icon": 1}), $(".form-control .Femail").html(t), setTimeout(function () {
                            layer.close(v), $("#emailModify").parent().hide()
                        }, 300); else {
                            var a = p[n.response.code] || "修改邮箱失败";
                            layer.msg(a, {"icon": 2})
                        }
                    }
                }, "handleEmailModifyYes": function () {
                    var t = this;
                    return function () {
                        var n = $.trim($("#emailBox").val()), a = t.validEmail(n), o = $.trim($("#captureBox").val()),
                            i = t.validCapture(o);
                        "success" !== a && $("#emailBox").parent().next().html(a).addClass("error").show(), "success" !== i && $("#captureBox").parent().next().html(i).addClass("error").show(), "success" === a && "success" === i && ("accountSettings" == t.info.access ? $.ajax({
                            "type": "get",
                            "url": "/user/updateContactEmail",
                            "dataType": "json",
                            "data": {"emailcode": o, "email": n},
                            "success": t.handleEmailModifySubmitSuccess(n),
                            "error": function () {
                                layer.msg("修改邮箱失败", {"icon": 2})
                            }
                        }) : t.info.bindLoginEmail && t.info.bindLoginEmail({
                                "verifycode": o,
                                "email": n
                            }).then(t.handleEmailModifySubmitSuccess(n), function () {
                                layer.msg("修改邮箱失败", {"icon": 2})
                            }))
                    }
                }, "handleEmailCaptureCheckSuccess": function (t, n, a) {
                    var o = this;
                    return function (i) {
                        if ("0" == i.response.code) {
                            layer.msg("获取验证码成功", {"icon": 1}), o.countDown($(a), 60);
                            var r = u.getEmailMap(), s = r[n.substring(n.indexOf("@") + 1).toLowerCase()];
                            s || (s = "https://www.baidu.com/"), t.html('验证码已发送至您的邮箱，点击<a href="' + s + '" target="_blank">登录</a>邮箱').removeClass("error").show()
                        } else {
                            var l = p[i.response.code] || "获取验证码失败";
                            layer.msg(l, {"icon": 2})
                        }
                    }
                }, "handleEmailCaptureBtnClick": function () {
                    var t = this;
                    return function () {
                        var n = this;
                        if (!$(n).hasClass("waiting")) {
                            var a = $.trim($(n).prev().val()), o = t.validEmail(a), i = $(n).parent().next();
                            if ("success" !== o)return void i.html(o).addClass("error").show();
                            i.html("").removeClass("error").hide(), "accountSettings" == t.info.access ? $.ajax({
                                "type": "get",
                                "url": "/user/sendContactEmailCode",
                                "dataType": "json",
                                "data": {"email": a},
                                "success": t.handleEmailCaptureCheckSuccess(i, a, n),
                                "error": function () {
                                    layer.msg("获取验证码失败！", {"icon": 2})
                                }
                            }) : t.info.sendBindEmailCode && t.info.sendBindEmailCode({"email": a}).then(t.handleEmailCaptureCheckSuccess(i, a, n), function () {
                                    layer.msg("获取验证码失败！", {"icon": 2})
                                })
                        }
                    }
                }, "handleEmailCaptureBtnBlur": function () {
                    var t = this;
                    return function () {
                        var n = $(this).val(), a = $(this).hasClass("_email") ? t.validEmail(n) : t.validCapture(n),
                            o = $(this).parent().next();
                        "success" !== a ? o.html(a).addClass("error").show() : o.hasClass("error") && o.html("").removeClass("error").hide()
                    }
                }, "handleEmailModifySuccess": function () {
                    var t = this;
                    return function () {
                        $("#emailGetCaptureBtn").on("click", t.handleEmailCaptureBtnClick()), $("#emailBox, #captureBox").on("blur", t.handleEmailCaptureBtnBlur())
                    }
                }, "handleEmailModifyClick": function () {
                    var t = this;
                    v = layer.open({
                        "type": 1,
                        "title": ["修改邮箱", "border-bottom:1px solid #e9eef4;"],
                        "area": ["800px", "380px"],
                        "content": r("modify-email-layer", {}),
                        "btn": ["确认修改", "取消"],
                        "success": t.handleEmailModifySuccess(),
                        "yes": t.handleEmailModifyYes()
                    })
                }, "handleContactModifySubmitSuccess": function () {
                    var t = this, n = {
                        "-64086": "校验结果已失效",
                        "-64121": "⽤户类型不符合操作要求",
                        "-64028": "主体账号注册次数超限",
                        "-64029": "身份证公安校验服务失败",
                        "-64030": "身份证公安校验⽆效次数太多",
                        "-64031": "身份证ID错误",
                        "-64122": "新旧联系人相同"
                    };
                    return function (a) {
                        t.isajaxing = !1, t.layerindex && layer.close(t.layerindex), 0 == a.response.code ? (layer.msg("修改成功！", {"icon": 1}), setTimeout(function () {
                            layer.closeAll()
                        }, 500), window.location.reload()) : layer.msg(n[a.response.code] || a.response.msg, {"icon": 2})
                    }
                }, "handleContactModifyYes": function () {
                    var t = this;
                    return function () {
                        if (t.isajaxing)return void layer.msg("请等待上一次提交结束！", {"icon": 3});
                        var n = $.trim($("#newIdCardName").val()), a = $.trim($("#newIdCardCode").val()),
                            o = t.validateName(n),
                            i = $("#newIdCardName").parents(".form-control").find(".help-block.error");
                        return "success" != o ? (i.text(o).show(), !1) : (i.text("").hide(), o = t.validateIdCard(a), i = $("#newIdCardCode").parents(".form-control").find(".help-block.error"), "success" != o ? (i.text(o).show(), !1) : (i.text("").hide(), t.isajaxing = !0, t.layerindex = layer.msg("提交中…", {"icon": 4}), void $.ajax({
                            "type": "post",
                            "url": "/user/updateIdentificationInfo",
                            "dataType": "json",
                            "data": {"idname": n, "identification": a},
                            "success": t.handleContactModifySubmitSuccess(),
                            "error": function () {
                                layer.msg("修改联系人失败", {"icon": 2}), t.isajaxing = !1, t.layerindex && layer.close(t.layerindex)
                            }
                        })))
                    }
                }, "handleNewIdCardNameInputBlur": function () {
                    var t = this;
                    return function () {
                        var n = $(this).val(), a = $(this).parent().siblings(".help-block.error"),
                            o = t.validateName(n);
                        "success" == o ? a.text("").hide() : a.text(o).show()
                    }
                }, "handleNewIdCardCodeInputBlur": function () {
                    var t = this;
                    return function () {
                        var n = $(this).val(), a = $(this).parent().siblings(".help-block.error"),
                            o = t.validateIdCard(n);
                        "success" == o ? a.text("").hide() : a.text(o).show()
                    }
                }, "handleContactModifySuccess": function () {
                    var t = this;
                    return function () {
                        $("#newIdCardName").on("blur", t.handleNewIdCardNameInputBlur()), $("#newIdCardCode").on("blur", t.handleNewIdCardCodeInputBlur())
                    }
                }, "handleContactModifyCancel": function () {
                    var t = this;
                    return function () {
                        t.isajaxing = !1, t.layerindex && layer.close(t.layerindex)
                    }
                }, "handleContactModifyClick": function () {
                    var t = this;
                    h = layer.open({
                        "type": 1,
                        "title": ["修改联系人", "border-bottom:1px solid #e9eef4;"],
                        "area": ["800px", "480px"],
                        "content": r("modify-contact-layer", {"oldcontact": window.Id_Name_Encrypt}),
                        "btn": ["确认修改", "取消"],
                        "success": t.handleContactModifySuccess(),
                        "yes": t.handleContactModifyYes(),
                        "cancel": t.handleContactModifyCancel()
                    })
                }, "handleIdentifySubmitSuccess": function () {
                    var t = this;
                    return function (n) {
                        0 == n.response.code ? ("tel" == t.changetype ? t.handleTelModifyClick() : "email" == t.changetype ? t.handleEmailModifyClick() : "contact" == t.changetype && t.handleContactModifyClick(), layer.close(b)) : layer.msg("信息填写有误，请核对后重新输入！", {"icon": 2})
                    }
                }, "getIdentifyParams": function () {
                    var t = this, n = t.$container, a = t.registerType, o = {};
                    1 != a && 2 != a && 3 != a || (o = {
                        "idname": n.find(".input-name").val(),
                        "identification": n.find(".input-id-last-six").val()
                    });
                    var i = 2 == a ? {
                        "organization": n.find(".input-org-name").val(),
                        "orgcode": n.find(".input-org-last-six").val()
                    } : {}, r = 3 == a ? {
                        "enterprise": n.find(".input-ent-name").val(),
                        "entlicense": n.find(".input-ent-last-six").val()
                    } : {};
                    5 == a && (o = {
                        "idname": n.find(".input-name").val(),
                        "identification": n.find(".input-id-last-six").val()
                    }, i = {
                        "organization": n.find(".input-org-name").val(),
                        "orgcode": n.find(".input-org-last-six").val()
                    });
                    var s = $.extend({"isValid": !0}, o, i, r);
                    for (var l in s)if (s.hasOwnProperty(l) && !s[l]) {
                        s.isValid = !1;
                        break
                    }
                    return s
                }, "handleIdentifyCheckSubmit": function (t) {
                    var n = this;
                    return function (e) {
                        if (0 == n.$container.find(".wrong").length) {
                            var a = n.$container.find(".getAuthCode").attr("data-type"),
                                o = C[t.access]["validAuthCodeApi"][a], i = n.$container.find(".authCode").val(),
                                r = {};
                            "email" == a && (r.emailcode = i), "phone" == a && (r.mobilecode = i);
                            var s = t.handleIdentifySubmitSuccess || t[n.changetype] && t[n.changetype].handleIdentifySubmitSuccess;
                            $.ajax({
                                "type": "get",
                                "url": o,
                                "data": r,
                                "async": !1 !== t.handleIdentifySubmitSuccessAsync,
                                "dataType": "json",
                                "success": s ? s({
                                    "IdentifyCheckLayer": b,
                                    "checkClass": n
                                }) : n.handleIdentifySubmitSuccess(),
                                "error": function () {
                                    layer.msg("提交失败！", {"icon": 2})
                                }
                            })
                        }
                    }
                }, "validateName": function (t) {
                    return "" == $.trim(t) ? "输入有误，请重新输入" : "success"
                }, "validAuthCode": function (t) {
                    return "" == $.trim(t) ? "输入有误， 请重新输入" : "success"
                }, "validateIdCard": function (t) {
                    return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test($.trim(t)) ? "success" : "身份证格式有误，请重新输入"
                }, "validateLastSix": function (t) {
                    return /^.{6}$/.test($.trim(t)) ? "success" : "输入有误，请重新输入"
                }, "validateOutput": function (t, e) {
                    var n = this, a = e.currentTarget.value, o = n.$container, i = $(e.currentTarget),
                        r = o.find(".icon-" + t), s = n[f[t]["validate"]](a), l = o.find("#identify-check-submit");
                    "success" != s ? (r.next().html(s), i.addClass("wrong"), 0 !== o.find(".wrong").length && l.addClass("disabled").attr("disabled", !0)) : (r.next().html(""), i.removeClass("wrong"), 0 === o.find(".wrong").length && l.removeClass("disabled").removeAttr("disabled"))
                }, "IdentifyCheckSuccess": function (t) {
                    var n = this;
                    return function (a) {
                        n.$container = a, a.on("click", "#identify-check-submit", n.handleIdentifyCheckSubmit(t)).on("click", "#identify-check-cancel", function () {
                            layer.close(b)
                        }).on("blur", ".input-name", function (e) {
                            n.validateOutput("name", e)
                        }).on("blur", ".input-id-last-six", function (e) {
                            n.validateOutput("id-last-six", e)
                        }).on("blur", ".input-org-name", function (e) {
                            n.validateOutput("org-name", e)
                        }).on("blur", ".input-org-last-six", function (e) {
                            n.validateOutput("org-last-six", e)
                        }).on("blur", ".input-ent-name", function (e) {
                            n.validateOutput("ent-name", e)
                        }).on("blur", ".input-ent-last-six", function (e) {
                            n.validateOutput("ent-last-six", e)
                        }).on("blur", ".authCode", function (e) {
                            n.validateOutput("authCode", e)
                        }).on("click", ".getAuthCode", function (e) {
                            e.preventDefault();
                            var o = $(this), i = o.attr("data-type"), r = $("notexist");
                            r.valid = null, r.accountType = 6666;
                            var l = C[t.access]["getAuthCodeApi"][i];
                            $("input").not(".authCode").trigger("blur");
                            var c = n.getIdentifyParams();
                            if (0 != c.isValid && (delete c.isValid, !/输入有误，请重新输入/.test(a.html())))return 4 == n.registerType ? void d(o, r, l, {}, s.errorCode) : void $.ajax({
                                "type": "post",
                                "url": "/userAuth/checkBodyInfo",
                                "data": n.getIdentifyParams(),
                                "dataType": "json",
                                "success": function (t) {
                                    if (0 != t.response.code)return void layer.msg(t.response.msg, {"icon": 2});
                                    d(o, r, l, {}, s.errorCode)
                                },
                                "error": function () {
                                    layer.msg("提交失败！", {"icon": 2})
                                }
                            })
                        })
                    }
                }, "handleIdentifyBeforeChangeClick": function (t, n) {
                    if (!y) {
                        var a = this;
                        return a.registerType = t.registerType, a.callbackObj = n || {}, k = k || t.login_phone || "", a.info = t, function (e) {
                            var n = "", o = $(e.currentTarget);
                            if (!o.hasClass("disabled")) {
                                var i = o.attr("data-title"), s = [i || "修改手机号", "border-bottom:1px solid #e9eef4;"],
                                    l = o.attr("name"), c = o.attr("data-valid-type");
                                a.changetype = l, a.event = e;
                                var d = {"changetype": l, "validType": c};
                                switch ("accountSettings" == t.access && (d = $.extend(!0, d, contactInfo)), "accountSiginSettings" == t.access && (d = $.extend(!0, d, g_userInfo)), a.registerType) {
                                    case 1:
                                        n = r("check-identity-self-layer", d);
                                        break;
                                    case 2:
                                        n = r("check-identity-media-layer", d);
                                        break;
                                    case 3:
                                        n = r("check-identity-enterprise-layer", d);
                                        break;
                                    case 0:
                                    case 4:
                                        n = r("check-identity-gov-layer", d);
                                        break;
                                    case 5:
                                        n = r("check-identity-orginization-layer", d);
                                        break;
                                    default:
                                        return void("tel" == l ? a.callbackObj.tel ? a.callbackObj.tel(a.event) : a.handleTelModifyClick() : "email" == l ? a.callbackObj.email ? a.callbackObj.email(a.event) : a.handleEmailModifyClick() : "contact" == l && (a.callbackObj.contact ? a.callbackObj.contact(a.event) : a.handleContactModifyClick()))
                                }
                                if ("email" == l ? s[0] = "修改邮箱" : "contact" == l && (s[0] = "修改联系人"), t.wrapFn)return t.$wrap = t.wrapFn(n), void a.IdentifyCheckSuccess(t)(t.$wrap);
                                b = layer.open({
                                    "type": 1,
                                    "title": s,
                                    "area": ["800px", "auto"],
                                    "shadeClose": !1,
                                    "content": n,
                                    "success": a.IdentifyCheckSuccess(t)
                                })
                            }
                        }
                    }
                }
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "jwNj": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            function i(t) {
                function n(n) {
                    var a, i;
                    return $.Deferred(function (r) {
                        m.open({
                            "type": 1,
                            "title": [n.title, "border-bottom:1px solid #e9eef4;"],
                            "closeBtn": 1,
                            "shadeClose": !0,
                            "area": ["660px", "455px"],
                            "content": l("email/newBind", {}),
                            "btn": ["确定", "取消"],
                            "success": function (t, n) {
                                i = $(".bind-email-form"), i.find(".getAuthCode").off("click").on("click", function () {
                                    var t = $(this), n = i.find("input[name=email]");
                                    p(t, n, {"apiName": "sendBindEmailCode", "data": {"email": $.trim(n.val())}})
                                });
                                try {
                                    a.destroy()
                                } catch (e) {
                                }
                                a = s(i)
                            },
                            "yes": function (n, s) {
                                if (i.valid()) {
                                    var l = i.find("input[name=email]").val(), c = i.find("input[name=authCode]").val(),
                                        p = f.objectTrim({"email": l, "verifycode": c});
                                    d.bindLoginEmail(p).then(function (i) {
                                        if ("0" == i.response.code) {
                                            m.msg("绑定成功", {"icon": 1});
                                            var s = i.data;
                                            t.statInfo.nowEmail = s.email || l, t.statInfo.canModify = s.canModify, t.statInfo.nextTime = s.nextTime || "", o.render();
                                            try {
                                                a.destroy()
                                            } catch (e) {
                                            }
                                            r.resolve(), m.close(n)
                                        } else u[i.response.code] ? m.msg(u[i.response.code], {"icon": 2}) : "-10403" != i.response.code && m.msg("绑定失败（" + i.response.code + "）", {"icon": 2})
                                    })
                                }
                            }
                        })
                    }).promise()
                }

                var a = $(".main"), o = this;
                this.eventBind = function () {
                    a.on("click", ".openAddEmail", function () {
                        return !v && (n({"title": $(this).attr("title")}), !1)
                    })
                }, this.render = function () {
                    t.hasAccountSync = g_userStatus.hasAccountSync, g_userInfo.email = t.statInfo.nowEmail, a.html(l("accountSiginSettings", t))
                }
            }

            var r = a(0), s = a("KOlX"), l = a("O4X3"), c = a("48Hj"), d = c.api, u = c.errorCode, p = c.getAuthCode,
                f = (r.component.placeholder, r.tool.mess), m = r.omlayer,
                v = "undefined" != typeof window.g_userStatus && window.g_userStatus.isInNoIdentifyWhiteList;
            return i
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "la+8": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            return {
                "mediaType": a("bkt+"),
                "register": a("/IsZ"),
                "accountDesc": a("C73V"),
                "mediaInfo": a("MDSi"),
                "mediaBodyInfo": a("SWk9")
            }
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "nB1T": function (t, n, a) {
        var o = a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = o.$escape, i = t.email;
            return n += '<div class="form-group form-group-phone">\n    <label for="" class="form-label label-person-set">验证码</label>\n    <div class="form-control">\n        <span class="form-static-text Fmobile">已绑定邮箱：', n += a(i), n += '</span>\n    </div>\n    <label for="" class="form-label label-person-set"> </label>\n    <div class="form-control">\n        <label class="input-control">\n            <input  type="text" class="authCode input-text valid wrong" value="">\n            <button type="button" data-type="email" class="btn btn-default getAuthCode">获取验证码</button>\n        </label>\n        <p class="help-block">请填写邮箱验证码</p>\n        <div class="succ-icon-set" style="position: initial;margin-top: 10px;">\n            <i class="icon icon-authCode"></i>\n            <span></span>\n        </div>\n    </div>\n</div>'
        }
    }, "oOWc": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="pop-body">\r\n    <div class="modify-intro-form">\r\n        <div class="form-group">\r\n            <div class="form-control">\r\n                <div class="input-control input-control-b">\r\n                    <label class="input-control input-control-b">\r\n                        <textarea type="text" class="textarea" style="height: 160px"></textarea>\r\n                        <span class="placeholder" style="display: block;">请输入推荐语</span>\r\n                        <div class="count"><em>0</em>/18</div>\r\n                    </label>\r\n                    <p class="help-block error" style="display: none;">不能为空</p>\r\n                    <p class="help-block">请填写企鹅号内容特点，或作者知名度、影响力、社会地位等信息，填写完成，可抢先体验<a href="https://om.qq.com/notice/a/20170824/035165.htm" target="_blank">快报4.0版帐号推荐位置</a>，抢占首批曝光机会，收获海量粉丝</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
        }
    }, "oTAG": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = t.typeCanModify, o = t.infoCanModify;
            return n += '<div class="pop-body">\n\t\t<div class="checkbox-inline text-center tabModifyNote" id="checkboxCon" style="padding:30px;">\n\t\t\t<label class="ui-radio">\n\t\t\t\t', "1" == a && (n += '\n\t\t\t\t<input type="radio" name="name1" class="active"><i class="icon icon-radio radio-active" flag="0"></i>主体类型修改\n\t\t\t\t'), n += '\n\t\t\t</label>\n\t\t\t<label class="ui-radio">\n\t\t\t\t', "1" == o && "1" == a ? n += '\n\t\t\t\t<input type="radio" name="name1" class="active"><i class="icon icon-radio" flag="1"></i>主体信息修改\n\t\t\t\t' : "1" == o && "0" == a && (n += '\n\t\t\t\t<input type="radio" name="name1" class="active"><i class="icon icon-radio radio-active" flag="1"></i>主体信息修改\n\t\t\t\t'), n += '\n\t\t\t</label>\n\t\t</div>\n\t\t<div style="padding-left:30px;line-height: 24px;">\n\t\t\t<p style="padding-bottom:12px">\n\t\t\t\t\t<b>注意事项：</b>\n\t\t\t</p>\n\t\t\t<div class="tabModifyNoteList">\n\t\t\t\t', n += "1" == o && "0" == a ? '\n\t\t\t\t<ul style="display:none;">\n\t\t\t\t' : "\n\t\t\t\t<ul>\n\t\t\t\t", n += '\n\t\t\t\t\t<li class="text-dark">1、主体类型修改支持4、5级的媒体</li>\n\t\t\t\t\t<li class="text-dark">2、主体类型修改每自然月可以修改<span class="link">1</span>次，一年可以修改<span class="link">3</span>次</li>\n\t\t\t\t\t<li class="text-dark">3、主体类型修改支持个人、企业、媒体修改为媒体或企业，不支持修改为同类型主体</li>\n\t\t\t\t\t<li class="text-dark">4、修改资料提交后，我们将在3个工作日内反馈结果</li>\n\t\t\t\t\t<li class="text-dark">5、主体修改审核通过成功后，已绑定银行卡的，需重新填写银行卡信息，未提取的金额将归修改后的主体所有</li>\n\t\t\t\t\t<li class="text-dark">6、企鹅号的使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖</li>\n\t\t\t\t</ul>\n\t\t\t\t', n += "1" == o && "0" == a ? "\n\t\t\t\t<ul>\n\t\t\t\t" : '\n\t\t\t\t<ul style="display:none;">\n\t\t\t\t', n += '\n\t\t\t\t\t<li class="text-dark">1、主体信息修改支持符合条件的企业类型和媒体类型的帐号主体修改</li>\n\t\t\t\t\t<li class="text-dark">2、主体信息修改每自然月可以修改<span class="link">1</span>次，一年可以修改<span class="link">3</span>次</li>\n\t\t\t\t\t<li class="text-dark">3、修改资料提交后，我们将在3个工作日内反馈结果</li>\n\t\t\t\t\t<li class="text-dark">4、主体修改审核通过成功后，已绑定银行卡的，需重新填写银行卡信息，未提取的金额将归修改后的主体所有</li>\n\t\t\t\t\t<li class="text-dark">5、企鹅号的使用权仅属于初始申请注册人，禁止赠与、借用、租用、转让或售卖</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n'
        }
    }, "olbB": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="pop-body">\r\n    <form class="form-horizontal bind-phone-form">\r\n        <div class="form-horizontal">\r\n            <div class="form-group">\r\n                <label for="Phone" class="form-label">手机号</label>\r\n                <div class="form-control">\r\n                    <label class="input-control">\r\n                        <input type="text" class="input-text" id="phone" name="phone" value="">\r\n                    </label>\r\n                    <p class="help-block">请填写本人常用手机号，该手机号将作为登录ID，一个手机号只能绑定一个企鹅号</p>\r\n                </div>\r\n            </div>\r\n            \x3c!-- form-group /--\x3e\r\n\r\n            <div class="form-group form-group-phone">\r\n                <label for="Phone" class="form-label">验证码</label>\r\n                <div class="form-control">\r\n                    <label class="input-control">\r\n                        <input type="text" class="input-text" id="authCode" name="authCode" value="">\r\n                        <button type="button" class="btn btn-default getAuthCode">获取验证码</button>\r\n                    </label>\r\n                </div>\r\n            </div>\r\n            \x3c!-- form-group /--\x3e\r\n        </div>\r\n    </form>\r\n</div>\r\n\x3c!-- pop-body/ --\x3e'
        }
    }, "pkWZ": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            var o = {};
            return o.checkWechatId = function () {
                function t(t) {
                    return n[t.wechatId] || (n[t.wechatId] = $.ajax({
                        "type": "get",
                        "url": "/api/verifyWechatId",
                        "data": t,
                        "dataType": "json"
                    })), n[t.wechatId]
                }

                var n = {};
                return t
            }(), o.checkWechatIdForInvitation = function () {
                function t(t) {
                    return n[t.wechatId] || (n[t.wechatId] = $.ajax({
                        "type": "get",
                        "url": "/api/isWechatRegistered",
                        "data": t,
                        "dataType": "json"
                    })), n[t.wechatId]
                }

                var n = {};
                return t
            }(), o.authorizeBindOpen = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/AuthorizeBindOpen", "data": t, "dataType": "json"})
            }, o.authorizeCancel = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/AuthorizeCancel", "data": t, "dataType": "json"})
            }, o.authorizeBindInner = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/AuthorizeBindInner", "data": t, "dataType": "json"})
            }, o
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "t/mI": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            var o = {};
            return o.email = /^\w+([._-]\w+)*@([\w-]+\.)+\w+$/, o.phone = /^1\d{10}$/, o.url = /^(?:(?:(?:https?|ftp|rtmp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i, o.sinaWeibo = /^http[s]?:\/\/(?:www\.)?weibo\.com\//, o.notChinese = /[u00-uff]/, o.isIDCard = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, o
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "uBq+": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            var o = {};
            return o.getVerifycode = function (t) {
                return $.ajax({"type": "get", "url": "/userReg/verifyCodeSend", "data": t, "dataType": "json"})
            }, o.verifyAccount = function (t) {
                return $.ajax({"type": "get", "url": "/userReg/accountIsUse", "data": t, "dataType": "json"})
            }, o.submitRegisterAccount = function (t) {
                return $.ajax({"type": "post", "url": "/userReg/registerAccount", "data": t, "dataType": "json"})
            }, o.modifyAccountType = function (t) {
                return $.ajax({"type": "post", "url": "/userReg/modifyAccountType", "data": t, "dataType": "json"})
            }, o.checkMediaName = function (t) {
                return $.ajax({"type": "post", "url": "/userReg/registerCheckName", "data": t, "dataType": "json"})
            }, o.registerCheckIntro = function (t) {
                return $.ajax({"type": "post", "url": "/userReg/registerCheckIntro", "data": t, "dataType": "json"})
            }, o.checkIdentification = function (t) {
                return $.ajax({"type": "post", "url": "/userReg/registerCheckIdLegal", "data": t, "dataType": "json"})
            }, o.submitBasicInfo = function (t) {
                return $.ajax({"type": "post", "url": "/userReg/submitBasicInfo", "data": t, "dataType": "json"})
            }, o.submitOperatorInfo = function (t) {
                return $.ajax({"type": "post", "url": "/userReg/submitRegisterIdInfo", "data": t, "dataType": "json"})
            }, o.invokeEmail = function () {
                return $.ajax({"type": "post", "url": "/userReg/sendVerifyEmail", "dataType": "json"})
            }, o.bindLoginPhone = function (t) {
                return $.ajax({"type": "post", "url": "/user/BindLoginPhone", "data": t, "dataType": "json"})
            }, o.sendBindEmailCode = function (t) {
                return $.ajax({"type": "post", "url": "/user/sendBindEmailCode", "data": t, "dataType": "json"})
            }, o.bindLoginEmail = function (t) {
                return $.ajax({"type": "post", "url": "/user/bindLoginEmail", "dataType": "json", "data": t})
            }, o.sendBindPhoneCode = function (t) {
                return $.ajax({"type": "get", "url": "/user/sendBindPhoneCode", "data": t, "dataType": "json"})
            }, o.getMobileCapture = function (t) {
                return $.ajax({"type": "get", "url": "/userReg/sendContactNumberCode", "data": t, "dataType": "json"})
            }, o.getMobileCaptureWithoutNum = function () {
                return $.ajax({"type": "get", "url": "/user/sendSelfChangeCode", "dataType": "json"})
            }, o
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "uPxV": function (t, n, a) {
        var o;
        (o = function (t, n, a) {
            var o = {};
            return o.checkEmail = function (t) {
                return $.ajax({"type": "get", "url": "/userAuth/isEmailUsed", "data": t, "dataType": "json"})
            }, o.registerAccount = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/doRegister", "data": t, "dataType": "json"})
            }, o.invokeEmail = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/sendVerifyEmail", "data": t, "dataType": "json"})
            }, o.sendForgetPasswordEmail = function (t) {
                return $.ajax({
                    "type": "post",
                    "url": "/userAuth/sendForgetPasswordEmail",
                    "data": t,
                    "dataType": "json"
                })
            }, o.resetPassword = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/doResetPassword", "data": t, "dataType": "json"})
            }, o.checkMediaName = function () {
                function t(t) {
                    return t.medianame = t.name, n[t.name] || (n[t.name] = $.ajax({
                        "type": "get",
                        "url": "/userReg/RegisterCheckName",
                        "data": t,
                        "dataType": "json"
                    })), n[t.name]
                }

                var n = {};
                return t
            }(), o.isRepeatName = function () {
                function t(t) {
                    return n[t.name] || (n[t.name] = $.ajax({
                        "type": "get",
                        "url": "/api/isRepeatName",
                        "data": t,
                        "dataType": "json"
                    })), n[t.name]
                }

                var n = {};
                return t
            }(), o.checkMediaIntro = function () {
                function t(t) {
                    return n[t.intro] || (n[t.intro] = $.ajax({
                        "type": "get",
                        "url": "/api/checkMediaIntro",
                        "data": t,
                        "dataType": "json"
                    })), n[t.intro]
                }

                var n = {};
                return t
            }(), o.checkIdCardNumber = function () {
                function t(t) {
                    return n[t.id + t.name] || (n[t.id + t.name] = $.ajax({
                        "type": "get",
                        "url": "/api/bodyIdLegal",
                        "data": t,
                        "dataType": "json"
                    })), n[t.id + t.name].done(function (t) {
                        "-60004" != t.response.code && "-60032" != t.response.code || (n = {})
                    })
                }

                var n = {};
                return t
            }(), o.getUserInfo = function (t) {
                return $.ajax({"type": "get", "url": "/userAuth/userInfo", "data": t, "dataType": "json"})
            }, o.registerUserInfo = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/updateUserInfo", "data": t, "dataType": "json"})
            }, o.getQQbindUnique = function (t) {
                return $.ajax({"type": "get", "url": "/qmp/getQQbindUnique", "data": t, "dataType": "json"})
            }, o.modifyUserBody = function (t) {
                return $.ajax({"type": "post", "url": "/userAuth/modifyUserBody", "data": t, "dataType": "json"})
            }, o
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "v12k": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", o = t.changetype, i = t.validType, r = (arguments[1], function (t) {
                return n += t
            });
            return n += '<div class="popupverifybox3" id="popupverifybox-enterprise">\n\t<div class="pop-body">\n\t\t\t<div class="form-horizontal bind-phone-form verfiy-form-set">\n\t\t\t\t', "tel" != o && "contact" != o && "tel" != i || (n += "\n\t\t\t\t", r(a("1nSM")(t)), n += "\n\t\t\t\t"), n += "\n\t\t\t\t", "email" == o && (n += "\n\t\t\t\t", r(a("nB1T")(t)), n += "\n\t\t\t\t"), n += '\n\t\t\t\t<div class="pop-action">\n\t\t\t\t\t<button type="button" class="btn btn-primary disabled" disabled id="identify-check-submit">下一步</button>\n\t\t\t\t\t<button type="button" class="btn btn-default" id="identify-check-cancel">取消</button>\n\t\t\t\t</div>\n\t\t\t\n\t\t\t</div>\n\t</div>\n\t\x3c!-- pop-body/ --\x3e\n</div>'
        }
    }, "vXNq": function (t, n, a) {
        a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "";
            return n += '<div class="pop-body">\r\n\t<div class="form-horizontal bind-email-form">\r\n\t<div class="form-group form-group-email">\r\n\t\t<label for="mailbox" class="form-label label-set">邮箱</label>\r\n\t\t<div class="form-control">\r\n\t\t\t<label class="input-control">\r\n\t\t\t\t<input type="text" class="input-text _email" id="emailBox" placeholder="请填写要修改的邮箱">\r\n\t\t\t\t<button type="button" class="btn btn-default" id="emailGetCaptureBtn">获取验证码</button>\r\n\t\t\t</label>\r\n\t\t\t<p class="help-block" style="display: none;">邮箱格式错误</p>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class="form-group">\r\n\t\t<label for="mailbox" class="form-label">验证码</label>\r\n\t\t<div class="form-control">\r\n\t\t\t<label class="input-control">\r\n\t\t\t\t<input type="text" class="input-text" id="captureBox" placeholder="请填写验证码">\r\n\t\t\t</label>\r\n\t\t\t<p class="help-block" style="display: none;">验证码错误</p>\r\n\t\t</div>\r\n\t</div>\r\n\t\x3c!-- form-group /--\x3e\r\n</div>\r\n</div>'
        }
    }, "yTzd": function (t, n, a) {
        var o = a("+ObC");
        t.exports = function (t) {
            "use strict";
            t = t || {};
            var n = "", a = o.$escape, i = t.emailLink, r = t.email;
            return n += '<div class="pop-body">\r\n    <div class="form-horizontal bind-email-form">\r\n        <div class="form-horizontal">\r\n            <div class="result-box">\r\n                <p class="info">请到您的邮箱<br><a href="', n += a(i), n += '" target="_blank">', n += a(r), n += '</a><br>激活验证</p>\r\n                <div class="action">\r\n                    <a href="', n += a(i), n += '" target="_blank" class="btn btn-primary">登录绑定邮箱</a>\r\n                </div>\r\n                <div class="info-help">\r\n                    <div class="intro-mod">\r\n                        <h3>未收到邮件？</h3>\r\n                        <ol class="list-ol">\r\n                            <li>请检查填写的邮箱是否正确，如有错误可<a href="javascript:void(0)" class="link back">重新填写</a></li>\r\n                            <li>请检查邮件是否进入了邮件垃圾箱中</li>\r\n                            <li>以上操作后仍然没有收到邮件，请点击<a href="javascript:void(0)" class="link sendAgain">重发邮件</a></li>\r\n                        </ol>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'
        }
    }, "zWxB": function (t, n, a) {
        var o;
        (o = function (t, n, o) {
            var i = a(0), r = a("uBq+"), s = a("GkPk"), l = i.omlayer;
            return function () {
                function t(t, o) {
                    t.addClass("waiting"), o >= 0 && t.html('<span class="second-num">' + o + "</span>秒后重发"), n = setInterval(function () {
                        o -= 1, o >= 0 ? t.html('<span class="second-num">' + o + "</span>秒后重发") : (clearInterval(n), t.removeClass("waiting").addClass(".getAuthCodeAgain").html("重新获取"), a = !0)
                    }, 1e3)
                }

                var n, a = !0;
                return function (n, o, i) {
                    if (!n.hasClass("waiting")) {
                        $.trim(o.val());
                        if (o.valid && !o.valid()) {
                            var c = o.parents(".form-control").find("p.error").text();
                            return void(c && "undefined" != c && l.msg(c, {"icon": 2}))
                        }
                        a && r[i["apiName"] || "getVerifycode"](i["data"]).then(function (o) {
                            "0" == o.response.code ? (l.msg("验证码已发送", {"icon": 1}), a = !1, t(n, 60)) : s[o.response.code] ? l.msg(s[o.response.code], {"icon": 2}) : "-10403" != o.response.code && l.msg("获取验证码发送异常（" + o.response.code + "）", {"icon": 2})
                        }, function () {
                        })
                    }
                }
            }()
        }.call(n, a, n, t)) !== undefined && (t.exports = o)
    }, "zudz": function (t, n, a) {
        "use strict";
        (function (n) {
            function a(t) {
                return "string" != typeof t && (t = t === undefined || null === t ? "" : "function" == typeof t ? a(t.call(t)) : JSON.stringify(t)), t
            }

            function o(t) {
                var n = "" + t, a = s.exec(n);
                if (!a)return t;
                var o = "", i = void 0, r = void 0, l = void 0;
                for (i = a.index, r = 0; i < n.length; i++) {
                    switch (n.charCodeAt(i)) {
                        case 34:
                            l = "&#34;";
                            break;
                        case 38:
                            l = "&#38;";
                            break;
                        case 39:
                            l = "&#39;";
                            break;
                        case 60:
                            l = "&#60;";
                            break;
                        case 62:
                            l = "&#62;";
                            break;
                        default:
                            continue
                    }
                    r !== i && (o += n.substring(r, i)), r = i + 1, o += l
                }
                return r !== i ? o + n.substring(r, i) : o
            }

            /*! art-template@runtime | https://github.com/aui/art-template */
            var i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== n ? n : {},
                r = Object.create(i), s = /["&'<>]/;
            r.$escape = function (t) {
                return o(a(t))
            }, r.$each = function (t, n) {
                if (Array.isArray(t))for (var a = 0, o = t.length; a < o; a++)n(t[a], a); else for (var i in t)n(t[i], i)
            }, t.exports = r
        }).call(n, a("DuR2"))
    }
});