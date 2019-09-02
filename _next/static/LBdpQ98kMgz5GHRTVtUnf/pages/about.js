(window.webpackJsonp = window.webpackJsonp || []).push([
  ["e6cc"], {
    "/kyW": function(e, t) {
      e.exports = "/_next/static/components/about/images/c55f77ce0dca125660291edacc64953f.jpg"
    },
    "4amE": function(e, t) {
      e.exports = "/_next/static/components/about/images/43a6e20449789679b6fddaedb15d2ac9.jpg"
    },
    "4tra": function(e, t) {
      e.exports = "/_next/static/components/about/images/5b2038f1e1ac6c89979334e60147ef78.jpg"
    },
    "8ZFP": function(e, t, a) {
      "use strict";
      var n = a("q1tI"),
        r = a.n(n),
        i = a("TSYQ"),
        l = a.n(i);
      t.a = function(e) {
        var t = l()("part--layout-overview", {
          "full-height": e.fullHeight
        });
        return r.a.createElement("div", {
          className: t
        }, r.a.createElement("div", {
          className: "panel",
          style: {
            backgroundColor: e.bgColor
          }
        }, r.a.createElement("div", {
          className: "title"
        }, r.a.createElement("span", {
          className: "bar",
          style: {
            background: "linear-gradient(90deg, " + e.gradient + ")"
          }
        }), r.a.createElement("h4", null, e.title)), r.a.createElement("div", {
          className: "content"
        }, e.children)))
      }
    },
    "E/Zn": function(e, t, a) {
      "use strict";
      var n = a("0iUn"),
        r = a("sLSF"),
        i = a("MI3g"),
        l = a("a7VT"),
        c = a("AT/M"),
        o = a("Tit0"),
        s = a("vYYK"),
        u = a("q1tI"),
        d = a.n(u),
        m = a("/MKj"),
        b = a("EgnG"),
        f = a("uuth"),
        p = a("mTMe"),
        h = function(e) {
          function t(e) {
            var a;
            return Object(n.default)(this, t), a = Object(i.default)(this, Object(l.default)(t).call(this, e)), Object(s.a)(Object(c.default)(a), "componentDidMount", function() {
              a.setState({
                wrapped: !0
              })
            }), Object(s.a)(Object(c.default)(a), "componentDidUpdate", function(e, t) {
              !t.wrapped && a.state.wrapped && (a.animation = Object(b.a)({
                targets: a.letters.current.querySelectorAll(".letter"),
                opacity: [{
                  value: [0, 1],
                  easing: "linear"
                }],
                translateY: ["150%", 0],
                duration: 2e3,
                easing: "easeOutCirc",
                delay: b.a.stagger(25, {
                  from: "center"
                })
              }), a.animation.seek(0)), !e.loaded && a.props.loaded && (a.animation.pause(), a.animation.seek(0), a.animation.play())
            }), a.state = {
              wrapped: !1,
              visible: !1
            }, a.letters = d.a.createRef(), a.chars = Object(p.c)(a.props.children), a.animation = null, a
          }
          return Object(o.default)(t, e), Object(r.default)(t, [{
            key: "render",
            value: function() {
              var e = this;
              return d.a.createElement(f.a, {
                onEnter: function() {
                  e.animation.play()
                },
                onLeave: function() {
                  e.animation.pause(), e.animation.seek(0)
                }
              }, d.a.createElement("span", {
                ref: this.letters
              }, this.state.wrapped ? this.chars : void 0))
            }
          }]), t
        }(d.a.Component);
      t.a = Object(m.b)(function(e) {
        return e
      })(h)
    },
    Fl5W: function(e, t) {
      e.exports = "/_next/static/components/about/images/42cdd7c01e113899a7f0be06c800f765.jpg"
    },
    FtQU: function(e, t) {
      e.exports = "/_next/static/components/about/images/bc5c6387b57bd51a7ca6b09eefefdbc7.jpg"
    },
    Juyh: function(e, t, a) {
      "use strict";
      a.r(t);
      var n = a("0iUn"),
        r = a("sLSF"),
        i = a("MI3g"),
        l = a("a7VT"),
        c = a("AT/M"),
        o = a("Tit0"),
        s = a("vYYK"),
        u = a("q1tI"),
        d = a.n(u),
        m = a("m/Pd"),
        b = a.n(m),
        f = a("UgXd"),
        p = a.n(f),
        h = a("/MKj"),
        g = a("ANjH"),
        v = a("ZSSH"),
        E = a("uuth"),
        j = a("rdxz"),
        O = a("x96L"),
        w = a("EgnG"),
        y = a("E/Zn"),
        k = a("mTMe"),
        S = function(e) {
          function t(e) {
            var a;
            return Object(n.default)(this, t), a = Object(i.default)(this, Object(l.default)(t).call(this, e)), Object(s.a)(Object(c.default)(a), "_visibility", function(e) {
              a.setState({
                visible: e
              })
            }), Object(s.a)(Object(c.default)(a), "componentDidMount", function() {
              a.chars = Object(k.c)(a.props.children), a.setState({
                wrapped: !0
              })
            }), Object(s.a)(Object(c.default)(a), "componentDidUpdate", function(e, t) {
              !e.loaded && a.props.loaded && (a.animation.pause(), a.animation.seek(0), a.animation.play()), !t.wrapped && a.state.wrapped && (a.animation = w.a.timeline({
                duration: 2e3,
                easing: "easeOutQuart"
              }), a.animation.add({
                targets: a.letters.current.querySelectorAll(".word"),
                translateX: [{
                  value: [-64, w.a.stagger([-64, -32])],
                  duration: 1100
                }, {
                  value: 0,
                  duration: 400
                }],
                delay: w.a.stagger(50)
              }).add({
                targets: a.letters.current.querySelectorAll(".letter"),
                opacity: [{
                  value: [0, 1],
                  easing: "linear"
                }],
                delay: w.a.stagger(25, {
                  from: "center"
                })
              }, 100), a.animation.seek(0))
            }), a.state = {
              wrapped: !1,
              visible: !1
            }, a.letters = d.a.createRef(), a.chars = [], a.animation = null, a
          }
          return Object(o.default)(t, e), Object(r.default)(t, [{
            key: "render",
            value: function() {
              var e = this;
              return d.a.createElement(E.a, {
                onEnter: function() {
                  e.animation.play()
                },
                onLeave: function() {
                  e.animation.pause(), e.animation.seek(0)
                }
              }, d.a.createElement("span", {
                ref: this.letters,
                className: "anim-forwards"
              }, this.state.wrapped ? this.chars.map(function(e, t) {
                return e
              }) : void 0))
            }
          }]), t
        }(d.a.Component),
        N = Object(h.b)(function(e) {
          return e
        })(S),
        C = (a("cPts"), Object(h.b)(function(e) {
          return e
        }, function(e) {
          return {
            updateUI: Object(g.bindActionCreators)(v.j, e)
          }
        })(function(e) {
          return d.a.createElement(E.a, {
            onEnter: function() {
              e.updateUI({
                logoColor: j.a.grayscale.black,
                navColor: j.a.grayscale.black
              })
            }
          }, d.a.createElement("div", {
            className: "section--hero"
          }, d.a.createElement("div", {
            className: "panel"
          }, d.a.createElement("div", {
            className: "about--intro-wrapper"
          }, d.a.createElement("div", {
            className: "part--headline"
          }, d.a.createElement("h1", null, d.a.createElement(y.a, null, "We believe that empathy, "), d.a.createElement(y.a, null, "intuitive design and technology "), d.a.createElement(N, null, "push us all forward.")))), d.a.createElement("div", {
            className: "intro-border"
          }))))
        })),
        x = a("TSYQ"),
        I = a.n(x),
        T = function(e) {
          function t(e) {
            var a;
            return Object(n.default)(this, t), a = Object(i.default)(this, Object(l.default)(t).call(this, e)), Object(s.a)(Object(c.default)(a), "_visibility", function(e) {
              a.setState({
                visible: e
              })
            }), Object(s.a)(Object(c.default)(a), "componentDidMount", function() {
              a.line1 = Object(k.c)("commit."), a.line2 = Object(k.c)("explore."), a.line3 = Object(k.c)("do great work."), a.setState({
                wrapped: !0
              })
            }), Object(s.a)(Object(c.default)(a), "componentDidUpdate", function(e, t) {
              if (!t.wrapped && a.state.wrapped && (a.color = Object(w.a)({
                  targets: ".section--values h2 .letter",
                  color: [{
                    value: j.a.gradient[0]
                  }, {
                    value: j.a.gradient[4]
                  }, {
                    value: j.a.gradient[8]
                  }, {
                    value: j.a.grayscale.black
                  }],
                  delay: w.a.stagger(5),
                  duration: 600,
                  easing: "linear",
                  autoplay: !1
                }), a.setState({
                  animate: !0
                })), a.state.animate && a.state.visible && e.scrollPosition !== a.props.scrollPosition) {
                var n = a.myRef.current,
                  r = n.getBoundingClientRect().top + n.offsetHeight,
                  i = .5 * a.props.windowHeight + n.offsetHeight,
                  l = Math.round(1e3 * (1 - r / i)) / 1e3;
                a.color.seek(1e3 * l)
              }
            }), a.state = {
              animate: !1,
              wrapped: !1,
              visible: !1
            }, a.myRef = d.a.createRef(), a.color = null, a.line1 = null, a.line2 = null, a.line3 = null, a
          }
          return Object(o.default)(t, e), Object(r.default)(t, [{
            key: "render",
            value: function() {
              var e = this,
                t = I()("section", "section--values", {
                  visible: this.state.visible
                });
              return d.a.createElement(E.a, {
                onEnter: function() {
                  e.props.updateUI({
                    logoColor: j.a.grayscale.bg2,
                    navColor: j.a.grayscale.bg2
                  })
                },
                bottomOffset: "90%",
                topOffset: "10%"
              }, d.a.createElement("div", {
                className: "theme-wrap"
              }, d.a.createElement("div", {
                className: t,
                id: "values",
                ref: this.myRef
              }, d.a.createElement("div", {
                className: "panel"
              }, d.a.createElement(E.a, {
                onEnter: function() {
                  e.setState({
                    visible: !0
                  })
                },
                onLeave: function() {
                  e.setState({
                    visible: !1
                  })
                }
              }, d.a.createElement("h2", null, d.a.createElement("div", null, this.line1), d.a.createElement("div", null, this.line2), d.a.createElement("div", null, this.line3)))))))
            }
          }]), t
        }(d.a.Component),
        U = Object(h.b)(function(e) {
          return e
        }, function(e) {
          return {
            updateUI: Object(g.bindActionCreators)(v.j, e)
          }
        })(T),
        _ = a("8ZFP"),
        A = a("Wld8"),
        M = a("iFe6"),
        W = a("pRoI"),
        F = a.n(W),
        L = a("4tra"),
        P = a.n(L),
        Y = a("/kyW"),
        D = a.n(Y),
        R = a("mdzx"),
        q = a.n(R),
        Q = a("4amE"),
        B = a.n(Q),
        K = Object(h.b)(function(e) {
          return e
        })(function(e) {
          return d.a.createElement("div", {
            className: "culture-grid"
          }, d.a.createElement("div", {
            className: "part--grid"
          }, d.a.createElement(M.b, {
            image: q.a,
            number: 1
          }), d.a.createElement(M.a, {
            number: 1
          }, d.a.createElement("h4", null, "Our People Come First"), d.a.createElement("p", null, "Although we are a well-oiled machine, our people are far from cogs. The talent we cultivate gets the importance of honing their respective crafts. It helps to better serve both each other and our partners, and it shows in everything – from what we design and produce, to what we value and believe."))), d.a.createElement(A.a, {
            image: function() {
              return e.windowWidth < 768 ? P.a : F.a
            }
          }), d.a.createElement("div", {
            className: "part--grid"
          }, d.a.createElement(M.a, {
            number: 2
          }, d.a.createElement("h4", null, "What's in the Box!?"), d.a.createElement("p", null, "Doesn't matter. We're too busy thinking far outside of the constraints of the typical brief. Creativity: it's what drives us. We do our best work when the guardrails are down and we can spread our wings. Designs are cleaner, strategies sharper, and the world generally becomes a better place.")), d.a.createElement(M.b, {
            image: B.a,
            number: 2
          }), d.a.createElement(M.b, {
            image: D.a,
            number: 3
          }), d.a.createElement(M.a, {
            number: 3
          }, d.a.createElement("h4", null, "The City Beautiful, and Beyond."), d.a.createElement("p", null, 'Although we call Downtown Orlando "home", we work well with partners from here to Timbuktu. We also believe that great products can come from anywhere. So, we encourage our team to untether, stretch their legs, and explore alternative workspaces.'))))
        }),
        V = Object(h.b)(function(e) {
          return e
        }, function(e) {
          return {
            updateUI: Object(g.bindActionCreators)(v.j, e)
          }
        })(function(e) {
          return d.a.createElement(E.a, {
            onEnter: function() {
              e.updateUI({
                logoColor: j.a.grayscale.black,
                navColor: j.a.grayscale.black
              })
            },
            bottomOffset: "90%",
            topOffset: "10%"
          }, d.a.createElement("div", {
            className: "section--content-grid"
          }, d.a.createElement(_.a, {
            bgColor: j.a.grayscale.bg1,
            title: "Who We Are",
            gradient: [j.a.gradient[3], j.a.gradient[5]]
          }, d.a.createElement("p", null, "We're an independently owned, strategic creative agency – forever curious and ready to transform the way business is done.")), d.a.createElement(K, null)))
        }),
        z = a("b+mb"),
        H = a("FtQU"),
        X = a.n(H),
        Z = a("hXdd"),
        G = a.n(Z),
        J = Object(h.b)(function(e) {
          return e
        }, function(e) {
          return {
            updateUI: Object(g.bindActionCreators)(v.j, e)
          }
        })(function(e) {
          return d.a.createElement(E.a, {
            onEnter: function() {
              e.updateUI({
                logoColor: j.a.grayscale.bg2,
                navColor: j.a.grayscale.bg2
              })
            },
            bottomOffset: "90%",
            topOffset: "10%"
          }, d.a.createElement("div", {
            className: "section--careers"
          }, d.a.createElement("div", {
            className: "part--layout-skinny-cta"
          }, d.a.createElement(z.a, {
            url: "/careers"
          }, d.a.createElement("h4", null, "Like what you see?"), d.a.createElement("span", {
            className: "link"
          }, "Come work with us"))), d.a.createElement(A.a, {
            image: function() {
              return e.windowWidth < 768 ? G.a : X.a
            }
          })))
        }),
        $ = a("Fl5W"),
        ee = a.n($),
        te = a("bt3j"),
        ae = a.n(te),
        ne = p()(function() {
          return a.e("7754").then(a.bind(null, "sjFK"))
        }, {
          ssr: !1,
          loadableGenerated: {
            webpack: function() {
              return ["sjFK"]
            },
            modules: ["../components/_utility/Shader"]
          }
        }),
        re = function(e) {
          function t() {
            var e, a;
            Object(n.default)(this, t);
            for (var r = arguments.length, o = new Array(r), u = 0; u < r; u++) o[u] = arguments[u];
            return a = Object(i.default)(this, (e = Object(l.default)(t)).call.apply(e, [this].concat(o))), Object(s.a)(Object(c.default)(a), "componentDidMount", function() {
              a.props.updateUI({
                logoColor: j.a.grayscale.black,
                navColor: j.a.grayscale.gray5
              }), a.props.updateShaderImage(function() {
                return a.props.windowWidth < 768 ? ae.a : ee.a
              })
            }), a
          }
          return Object(o.default)(t, e), Object(r.default)(t, [{
            key: "render",
            value: function() {
              var e = this;
              return d.a.createElement("div", null, d.a.createElement(d.a.Fragment, null, d.a.createElement(b.a, null, d.a.createElement("title", null, "About Us | Purple Rock Scissors"))), d.a.createElement(ne, {
                preload: [ee.a, F.a, X.a, ae.a, P.a, G.a],
                s_lsd: [64, 50, .005],
                s_rgb: [128, 50, .02]
              }), d.a.createElement("div", {
                className: "content-container"
              }, d.a.createElement(C, null), d.a.createElement(U, null), d.a.createElement(E.a, {
                onEnter: function() {
                  e.props.updateShaderImage(function() {
                    return e.props.windowWidth < 768 ? ae.a : ee.a
                  })
                }
              }), d.a.createElement(V, null), d.a.createElement(J, null), d.a.createElement(O.a, null)))
            }
          }], [{
            key: "getInitialProps",
            value: function(e) {
              e.store, e.isServer, e.pathname, e.query;
              return {
                slug: "about",
                canonical: "/about",
                images: []
              }
            }
          }]), t
        }(d.a.Component);
      t.default = Object(h.b)(function(e) {
        return e
      }, function(e) {
        return {
          updateShaderImage: Object(g.bindActionCreators)(v.i, e),
          updateUI: Object(g.bindActionCreators)(v.j, e)
        }
      })(re)
    },
    bt3j: function(e, t) {
      e.exports = "/_next/static/components/about/images/3b1932c472f8314c09a91807471bba5d.jpg"
    },
    cPts: function(e, t, a) {
      "use strict";
      var n = a("0iUn"),
        r = a("sLSF"),
        i = a("MI3g"),
        l = a("a7VT"),
        c = a("AT/M"),
        o = a("Tit0"),
        s = a("vYYK"),
        u = a("q1tI"),
        d = a.n(u),
        m = a("EgnG"),
        b = a("uuth"),
        f = a("TSYQ"),
        p = a.n(f),
        h = a("rdxz"),
        g = (a("E/Zn"), function(e) {
          function t(e) {
            var a;
            return Object(n.default)(this, t), a = Object(i.default)(this, Object(l.default)(t).call(this, e)), Object(s.a)(Object(c.default)(a), "componentDidUpdate", function(e, t) {
              !t.visible && a.state.visible && Object(m.a)({
                targets: ".section--hero .part--headline .down-arrow svg",
                opacity: [0, 1],
                translateY: [-32, 0],
                duration: 1500,
                delay: 1e3,
                easing: "easeInOutQuad"
              })
            }), a.state = {
              visible: !1
            }, a
          }
          return Object(o.default)(t, e), Object(r.default)(t, [{
            key: "render",
            value: function() {
              var e = this,
                t = p()("section--hero", {
                  visible: this.state.visible
                });
              return d.a.createElement("div", {
                className: t
              }, d.a.createElement("div", {
                className: "panel"
              }, d.a.createElement(b.a, {
                onEnter: function() {
                  e.setState({
                    visible: !0
                  })
                },
                onLeave: function() {
                  e.setState({
                    visible: !1
                  })
                }
              }, d.a.createElement("div", {
                className: "part--headline"
              }, this.props.children, d.a.createElement("div", {
                className: "down-arrow"
              }, d.a.createElement("svg", {
                width: "25",
                height: "44",
                viewBox: "0 0 25 44",
                xmlns: "http://www.w3.org/2000/svg"
              }, d.a.createElement("path", {
                d: "M14 38.5l8-8 2.5 2.5L13 44h-1L.5 33 3 30.5l8 8V0h3v38.5z",
                fill: h.a.grayscale.black,
                fillRule: "nonzero"
              })))))))
            }
          }]), t
        }(d.a.Component));
      t.a = g
    },
    hXdd: function(e, t) {
      e.exports = "/_next/static/components/about/images/da9da4f9d21fe731de97050f80f7c0d4.jpg"
    },
    iFe6: function(e, t, a) {
      "use strict";
      a.d(t, "a", function() {
        return b
      }), a.d(t, "b", function() {
        return f
      });
      var n = a("0iUn"),
        r = a("sLSF"),
        i = a("MI3g"),
        l = a("a7VT"),
        c = a("Tit0"),
        o = a("q1tI"),
        s = a.n(o),
        u = a("uuth"),
        d = a("TSYQ"),
        m = a.n(d),
        b = function(e) {
          function t(e) {
            var a;
            return Object(n.default)(this, t), (a = Object(i.default)(this, Object(l.default)(t).call(this, e))).state = {
              visible: !1
            }, a
          }
          return Object(c.default)(t, e), Object(r.default)(t, [{
            key: "render",
            value: function() {
              var e = this,
                t = m()("panel", "panel-".concat(this.props.number), {
                  visible: this.state.visible
                });
              return s.a.createElement(u.a, {
                onEnter: function() {
                  e.setState({
                    visible: !0
                  })
                },
                onLeave: function() {
                  e.setState({
                    visible: !1
                  })
                }
              }, s.a.createElement("div", {
                className: t
              }, this.props.children))
            }
          }]), t
        }(s.a.Component),
        f = function(e) {
          function t(e) {
            var a;
            return Object(n.default)(this, t), (a = Object(i.default)(this, Object(l.default)(t).call(this, e))).state = {
              visible: !1
            }, a
          }
          return Object(c.default)(t, e), Object(r.default)(t, [{
            key: "render",
            value: function() {
              var e = this,
                t = m()("img-holder", "image-".concat(this.props.number), {
                  visible: this.state.visible
                });
              return s.a.createElement(u.a, {
                onEnter: function() {
                  e.setState({
                    visible: !0
                  })
                },
                onLeave: function() {
                  e.setState({
                    visible: !1
                  })
                }
              }, s.a.createElement("div", {
                className: t
              }, s.a.createElement("div", {
                className: "img-border"
              }, s.a.createElement("img", {
                src: this.props.image
              })), s.a.createElement("div", {
                className: "shadow"
              })))
            }
          }]), t
        }(s.a.Component)
    },
    mdzx: function(e, t) {
      e.exports = "/_next/static/components/about/images/00e389f3e429eb76d064d9b0bb053e4e.jpg"
    },
    pRoI: function(e, t) {
      e.exports = "/_next/static/components/about/images/72e3f5ae963cb491d627520b42202951.jpg"
    },
    rB5V: function(e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/about", function() {
        var e = a("Juyh");
        return {
          page: e.default || e
        }
      }])
    }
  },
  [
    ["rB5V", "5d41", "9da1"]
  ]
]);
