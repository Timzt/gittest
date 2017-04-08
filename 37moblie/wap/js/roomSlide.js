+ function(f, g, b, j, d, i, k) { /*! Jssor */
	new(function() {});
	var e = f.$JssorEasing$ = {
			tc: function(a) {
				return -b.cos(a * b.PI) / 2 + .5
			},
			md: function(a) {
				return a
			},
			zf: function(a) {
				return a * a
			},
			hd: function(a) {
				return -a * (a - 2)
			},
			Af: function(a) {
				return(a *= 2) < 1 ? 1 / 2 * a * a : -1 / 2 * (--a * (a - 2) - 1)
			},
			Bf: function(a) {
				return a * a * a
			},
			Cf: function(a) {
				return(a -= 1) * a * a + 1
			},
			Df: function(a) {
				return(a *= 2) < 1 ? 1 / 2 * a * a * a : 1 / 2 * ((a -= 2) * a * a + 2)
			},
			Ef: function(a) {
				return a * a * a * a
			},
			Ff: function(a) {
				return -((a -= 1) * a * a * a - 1)
			},
			Gf: function(a) {
				return(a *= 2) < 1 ? 1 / 2 * a * a * a * a : -1 / 2 * ((a -= 2) * a * a * a - 2)
			},
			Hf: function(a) {
				return a * a * a * a * a
			},
			If: function(a) {
				return(a -= 1) * a * a * a * a + 1
			},
			Jf: function(a) {
				return(a *= 2) < 1 ? 1 / 2 * a * a * a * a * a : 1 / 2 * ((a -= 2) * a * a * a * a + 2)
			},
			Kf: function(a) {
				return 1 - b.cos(a * b.PI / 2)
			},
			Lf: function(a) {
				return b.sin(a * b.PI / 2)
			},
			Mf: function(a) {
				return -1 / 2 * (b.cos(b.PI * a) - 1)
			},
			Nf: function(a) {
				return a == 0 ? 0 : b.pow(2, 10 * (a - 1))
			},
			Of: function(a) {
				return a == 1 ? 1 : -b.pow(2, -10 * a) + 1
			},
			cg: function(a) {
				return a == 0 || a == 1 ? a : (a *= 2) < 1 ? 1 / 2 * b.pow(2, 10 * (a - 1)) : 1 / 2 * (-b.pow(2, -10 * --a) + 2)
			},
			bg: function(a) {
				return -(b.sqrt(1 - a * a) - 1)
			},
			ag: function(a) {
				return b.sqrt(1 - (a -= 1) * a)
			},
			Zf: function(a) {
				return(a *= 2) < 1 ? -1 / 2 * (b.sqrt(1 - a * a) - 1) : 1 / 2 * (b.sqrt(1 - (a -= 2) * a) + 1)
			},
			Yf: function(a) {
				if(!a || a == 1) return a;
				var c = .3,
					d = .075;
				return -(b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c))
			},
			Xf: function(a) {
				if(!a || a == 1) return a;
				var c = .3,
					d = .075;
				return b.pow(2, -10 * a) * b.sin((a - d) * 2 * b.PI / c) + 1
			},
			dg: function(a) {
				if(!a || a == 1) return a;
				var c = .45,
					d = .1125;
				return(a *= 2) < 1 ? -.5 * b.pow(2, 10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) : b.pow(2, -10 * (a -= 1)) * b.sin((a - d) * 2 * b.PI / c) * .5 + 1
			},
			Wf: function(a) {
				var b = 1.70158;
				return a * a * ((b + 1) * a - b)
			},
			Uf: function(a) {
				var b = 1.70158;
				return(a -= 1) * a * ((b + 1) * a + b) + 1
			},
			Tf: function(a) {
				var b = 1.70158;
				return(a *= 2) < 1 ? 1 / 2 * a * a * (((b *= 1.525) + 1) * a - b) : 1 / 2 * ((a -= 2) * a * (((b *= 1.525) + 1) * a + b) + 2)
			},
			Hd: function(a) {
				return 1 - e.Lc(1 - a)
			},
			Lc: function(a) {
				return a < 1 / 2.75 ? 7.5625 * a * a : a < 2 / 2.75 ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : a < 2.5 / 2.75 ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
			},
			Sf: function(a) {
				return a < 1 / 2 ? e.Hd(a * 2) * .5 : e.Lc(a * 2 - 1) * .5 + .5
			},
			Rf: function() {
				return 1 - b.abs(1)
			},
			Qf: function(a) {
				return 1 - b.cos(a * b.PI * 2)
			},
			Pf: function(a) {
				return b.sin(a * b.PI * 2)
			},
			xf: function(a) {
				return 1 - ((a *= 2) < 1 ? (a = 1 - a) * a * a : (a -= 1) * a * a)
			},
			wf: function(a) {
				return(a *= 2) < 1 ? a * a * a : (a = 2 - a) * a * a
			}
		},
		c = f.$Jease$ = {
			vf: e.tc,
			l: e.md,
			df: e.zf,
			Pe: e.hd,
			Qe: e.Af,
			m: e.Bf,
			Kc: e.Cf,
			Re: e.Df,
			Se: e.Ef,
			Te: e.Ff,
			Ue: e.Gf,
			Ve: e.Hf,
			We: e.If,
			Xe: e.Jf,
			Ye: e.Kf,
			Ze: e.Lf,
			af: e.Mf,
			bf: e.Nf,
			cf: e.Of,
			ef: e.cg,
			uf: e.bg,
			ff: e.ag,
			gf: e.Zf,
			hf: e.Yf,
			jf: e.Xf,
			kf: e.dg,
			lf: e.Wf,
			mf: e.Uf,
			nf: e.Tf,
			of: e.Hd,
			pf: e.Lc,
			qf: e.Sf,
			rf: e.Rf,
			sf: e.Qf,
			tf: e.Pf,
			fg: e.xf,
			eg: e.wf
		};
	f.$JssorDirection$ = {};
	var a = f.$Jssor$ = new function() {
		var c = this,
			Ab = /\S+/g,
			S = 1,
			tb = 2,
			Z = 3,
			wb = 4,
			db = 5,
			I, s = 0,
			l = 0,
			q = 0,
			J = 0,
			C = 0,
			B = navigator,
			ib = B.appName,
			n = B.userAgent;

		function Jb() {
			if(!I) {
				I = {
					Vg: "ontouchstart" in f || "createTouch" in g
				};
				var a;
				if(B.pointerEnabled || (a = B.msPointerEnabled)) I.Pd = a ? "msTouchAction" : "touchAction"
			}
			return I
		}

		function t(i) {
			if(!s) {
				s = -1;
				if(ib == "Microsoft Internet Explorer" && !!f.attachEvent && !!f.ActiveXObject) {
					var e = n.indexOf("MSIE");
					s = S;
					q = o(n.substring(e + 5, n.indexOf(";", e))); /*@cc_on J=@_jscript_version@*/ ;
					l = g.documentMode || q
				} else if(ib == "Netscape" && !!f.addEventListener) {
					var d = n.indexOf("Firefox"),
						b = n.indexOf("Safari"),
						h = n.indexOf("Chrome"),
						c = n.indexOf("AppleWebKit");
					if(d >= 0) {
						s = tb;
						l = o(n.substring(d + 8))
					} else if(b >= 0) {
						var j = n.substring(0, b).lastIndexOf("/");
						s = h >= 0 ? wb : Z;
						l = o(n.substring(j + 1, b))
					} else {
						var a = /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/i.exec(n);
						if(a) {
							s = S;
							l = q = o(a[1])
						}
					}
					if(c >= 0) C = o(n.substring(c + 12))
				} else {
					var a = /(opera)(?:.*version|)[ \/]([\w.]+)/i.exec(n);
					if(a) {
						s = db;
						l = o(a[2])
					}
				}
			}
			return i == s
		}

		function p() {
			return t(S)
		}

		function N() {
			return p() && (l < 6 || g.compatMode == "BackCompat")
		}

		function vb() {
			return t(Z)
		}

		function cb() {
			return t(db)
		}

		function ob() {
			return vb() && C > 534 && C < 535
		}

		function L() {
			return p() && l < 9
		}

		function qb(a) {
			var b;
			return function(d) {
				if(!b) {
					b = a;
					var c = a.substr(0, 1).toUpperCase() + a.substr(1);
					m([a].concat(["WebKit", "ms", "Moz", "O", "webkit"]), function(g, f) {
						var e = a;
						if(f) e = g + c;
						if(d.style[e] != k) return b = e
					})
				}
				return b
			}
		}
		var pb = qb("transform");

		function hb(a) {
			return {}.toString.call(a)
		}
		var H;

		function Gb() {
			if(!H) {
				H = {};
				m(["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object"], function(a) {
					H["[object " + a + "]"] = a.toLowerCase()
				})
			}
			return H
		}

		function m(a, c) {
			if(hb(a) == "[object Array]") {
				for(var b = 0; b < a.length; b++)
					if(c(a[b], b, a)) return d
			} else
				for(var e in a)
					if(c(a[e], e, a)) return d
		}

		function z(a) {
			return a == j ? String(a) : Gb()[hb(a)] || "object"
		}

		function fb(a) {
			for(var b in a) return d
		}

		function x(a) {
			try {
				return z(a) == "object" && !a.nodeType && a != a.window && (!a.constructor || {}.hasOwnProperty.call(a.constructor.prototype, "isPrototypeOf"))
			} catch(b) {}
		}

		function w(a, b) {
			return {
				x: a,
				y: b
			}
		}

		function lb(b, a) {
			setTimeout(b, a || 0)
		}

		function F(b, d, c) {
			var a = !b || b == "inherit" ? "" : b;
			m(d, function(c) {
				var b = c.exec(a);
				if(b) {
					var d = a.substr(0, b.index),
						e = a.substr(b.lastIndex + 1, a.length - (b.lastIndex + 1));
					a = d + e
				}
			});
			a = c + (a.indexOf(" ") != 0 ? " " : "") + a;
			return a
		}

		function sb(b, a) {
			if(l < 9) b.style.filter = a
		}

		function Cb(g, a, i) {
			if(!J || J < 9) {
				var e = a.vb,
					f = a.yb,
					j = (a.B || 0) % 360,
					h = "";
				if(j || e != k || f != k) {
					if(e == k) e = 1;
					if(f == k) f = 1;
					var d = c.Og(j / 180 * b.PI, e || 1, f || 1),
						i = c.Qg(d, a.ob, a.nb);
					c.Rg(g, i.y);
					c.Sg(g, i.x);
					h = "progid:DXImageTransform.Microsoft.Matrix(M11=" + d[0][0] + ", M12=" + d[0][1] + ", M21=" + d[1][0] + ", M22=" + d[1][1] + ", SizingMethod='auto expand')"
				}
				var m = g.style.filter,
					n = new RegExp(/[\s]*progid:DXImageTransform\.Microsoft\.Matrix\([^\)]*\)/g),
					l = F(m, [n], h);
				sb(g, l)
			}
		}
		c.Tg = Jb;
		c.Cd = p;
		c.Eg = vb;
		c.Cc = cb;
		c.kb = L;
		c.wd = function() {
			return l
		};
		c.hg = function() {
			t();
			return C
		};
		c.D = lb;

		function V(a) {
			a.constructor === V.caller && a.zd && a.zd.apply(a, V.caller.arguments)
		}
		c.zd = V;
		c.ub = function(a) {
			if(c.Bd(a)) a = g.getElementById(a);
			return a
		};

		function r(a) {
			return a || f.event
		}
		c.Dd = r;
		c.uc = function(a) {
			a = r(a);
			return a.target || a.srcElement || g
		};
		c.Fd = function(a) {
			a = r(a);
			return {
				x: a.pageX || a.clientX || 0,
				y: a.pageY || a.clientY || 0
			}
		};

		function A(c, d, a) {
			if(a !== k) c.style[d] = a == k ? "" : a;
			else {
				var b = c.currentStyle || c.style;
				a = b[d];
				if(a == "" && f.getComputedStyle) {
					b = c.ownerDocument.defaultView.getComputedStyle(c, j);
					b && (a = b.getPropertyValue(d) || b[d])
				}
				return a
			}
		}

		function X(b, c, a, d) {
			if(a !== k) {
				if(a == j) a = "";
				else d && (a += "px");
				A(b, c, a)
			} else return o(A(b, c))
		}

		function h(c, a) {
			var d = a ? X : A,
				b;
			if(a & 4) b = qb(c);
			return function(e, f) {
				return d(e, b ? b(e) : c, f, a & 2)
			}
		}

		function Db(b) {
			if(p() && q < 9) {
				var a = /opacity=([^)]*)/.exec(b.style.filter || "");
				return a ? o(a[1]) / 100 : 1
			} else return o(b.style.opacity || "1")
		}

		function Fb(c, a, f) {
			if(p() && q < 9) {
				var h = c.style.filter || "",
					i = new RegExp(/[\s]*alpha\([^\)]*\)/g),
					e = b.round(100 * a),
					d = "";
				if(e < 100 || f) d = "alpha(opacity=" + e + ") ";
				var g = F(h, [i], d);
				sb(c, g)
			} else c.style.opacity = a == 1 ? "" : b.round(a * 100) / 100
		}
		var yb = {
			B: ["rotate"],
			Db: ["rotateX"],
			Fb: ["rotateY"],
			vb: ["scaleX", 2],
			yb: ["scaleY", 2],
			Qb: ["translateX", 1],
			Ub: ["translateY", 1],
			ac: ["translateZ", 1],
			gc: ["skewX"],
			bc: ["skewY"]
		};

		function nb(e, c) {
			if(p() && l && l < 10) {
				delete c.Db;
				delete c.Fb
			}
			var d = pb(e);
			if(d) {
				var b = "";
				a.g(c, function(e, c) {
					var a = yb[c];
					if(a) {
						var d = a[1] || 0;
						b += (b ? " " : "") + a[0] + "(" + e + (["deg", "px", ""])[d] + ")"
					}
				});
				e.style[d] = b
			}
		}
		c.mg = function(b, a) {
			if(ob()) lb(c.Q(j, nb, b, a));
			else(L() ? Cb : nb)(b, a)
		};
		c.Sd = h("transformOrigin", 4);
		c.ng = h("backfaceVisibility", 4);
		c.og = h("transformStyle", 4);
		c.pg = h("perspective", 6);
		c.qg = h("perspectiveOrigin", 4);
		c.rg = function(a, c) {
			if(p() && q < 9 || q < 10 && N()) a.style.zoom = c == 1 ? "" : c;
			else {
				var b = pb(a);
				if(b) {
					var f = "scale(" + c + ")",
						e = a.style[b],
						g = new RegExp(/[\s]*scale\(.*?\)/g),
						d = F(e, [g], f);
					a.style[b] = d
				}
			}
		};
		var bb = 0,
			ub = 0;
		c.tg = function(b, a) {
			return L() ? function() {
				var g = d,
					c = N() ? b.document.body : b.document.documentElement;
				if(c) {
					var f = c.offsetWidth - bb,
						e = c.offsetHeight - ub;
					if(f || e) {
						bb += f;
						ub += e
					} else g = i
				}
				g && a()
			} : a
		};
		c.nc = function(b, a) {
			return function(d) {
				d = r(d);
				var f = d.type,
					e = d.relatedTarget || (f == "mouseout" ? d.toElement : d.fromElement);
				(!e || e !== a && !c.ug(a, e)) && b(d)
			}
		};
		c.i = function(a, e, b, d) {
			a = c.ub(a);
			if(a.addEventListener) {
				e == "mousewheel" && a.addEventListener("DOMMouseScroll", b, d);
				a.addEventListener(e, b, d)
			} else if(a.attachEvent) {
				a.attachEvent("on" + e, b);
				d && a.setCapture && a.setCapture()
			}
		};
		c.W = function(a, d, e, b) {
			a = c.ub(a);
			if(a.removeEventListener) {
				d == "mousewheel" && a.removeEventListener("DOMMouseScroll", e, b);
				a.removeEventListener(d, e, b)
			} else if(a.detachEvent) {
				a.detachEvent("on" + d, e);
				b && a.releaseCapture && a.releaseCapture()
			}
		};
		c.hc = function(a) {
			a = r(a);
			a.preventDefault && a.preventDefault();
			a.cancel = d;
			a.returnValue = i
		};
		c.xg = function(a) {
			a = r(a);
			a.stopPropagation && a.stopPropagation();
			a.cancelBubble = d
		};
		c.Q = function(d, c) {
			var a = [].slice.call(arguments, 2),
				b = function() {
					var b = a.concat([].slice.call(arguments, 0));
					return c.apply(d, b)
				};
			return b
		};
		c.yg = function(a, b) {
			if(b == k) return a.textContent || a.innerText;
			var d = g.createTextNode(b);
			c.Bc(a);
			a.appendChild(d)
		};
		c.ab = function(d, c) {
			for(var b = [], a = d.firstChild; a; a = a.nextSibling)(c || a.nodeType == 1) && b.push(a);
			return b
		};

		function gb(a, c, e, b) {
			b = b || "u";
			for(a = a ? a.firstChild : j; a; a = a.nextSibling)
				if(a.nodeType == 1) {
					if(R(a, b) == c) return a;
					if(!e) {
						var d = gb(a, c, e, b);
						if(d) return d
					}
				}
		}
		c.I = gb;

		function P(a, d, f, b) {
			b = b || "u";
			var c = [];
			for(a = a ? a.firstChild : j; a; a = a.nextSibling)
				if(a.nodeType == 1) {
					R(a, b) == d && c.push(a);
					if(!f) {
						var e = P(a, d, f, b);
						if(e.length) c = c.concat(e)
					}
				}
			return c
		}

		function ab(a, c, d) {
			for(a = a ? a.firstChild : j; a; a = a.nextSibling)
				if(a.nodeType == 1) {
					if(a.tagName == c) return a;
					if(!d) {
						var b = ab(a, c, d);
						if(b) return b
					}
				}
		}
		c.Ne = ab;

		function rb(a, c, e) {
			var b = [];
			for(a = a ? a.firstChild : j; a; a = a.nextSibling)
				if(a.nodeType == 1) {
					(!c || a.tagName == c) && b.push(a);
					if(!e) {
						var d = rb(a, c, e);
						if(d.length) b = b.concat(d)
					}
				}
			return b
		}
		c.Ag = rb;
		c.zg = function(b, a) {
			return b.getElementsByTagName(a)
		};

		function y() {
			var e = arguments,
				d, c, b, a, g = 1 & e[0],
				f = 1 + g;
			d = e[f - 1] || {};
			for(; f < e.length; f++)
				if(c = e[f])
					for(b in c) {
						a = c[b];
						if(a !== k) {
							a = c[b];
							var h = d[b];
							d[b] = g && (x(h) || x(a)) ? y(g, {}, h, a) : a
						}
					}
				return d
		}
		c.u = y;

		function W(f, g) {
			var d = {},
				c, a, b;
			for(c in f) {
				a = f[c];
				b = g[c];
				if(a !== b) {
					var e;
					if(x(a) && x(b)) {
						a = W(a, b);
						e = !fb(a)
					}!e && (d[c] = a)
				}
			}
			return d
		}
		c.pd = function(a) {
			return z(a) == "function"
		};
		c.sc = function(a) {
			return z(a) == "array"
		};
		c.Bd = function(a) {
			return z(a) == "string"
		};
		c.dc = function(a) {
			return !isNaN(o(a)) && isFinite(a)
		};
		c.g = m;
		c.wg = x;

		function O(a) {
			return g.createElement(a)
		}
		c.wb = function() {
			return O("DIV")
		};
		c.sg = function() {
			return O("SPAN")
		};
		c.cd = function() {};

		function T(b, c, a) {
			if(a == k) return b.getAttribute(c);
			b.setAttribute(c, a)
		}

		function R(a, b) {
			return T(a, b) || T(a, "data-" + b)
		}
		c.K = T;
		c.n = R;

		function u(b, a) {
			if(a == k) return b.className;
			b.className = a
		}
		c.sd = u;

		function kb(b) {
			var a = {};
			m(b, function(b) {
				a[b] = b
			});
			return a
		}

		function mb(b, a) {
			return b.match(a || Ab)
		}

		function M(b, a) {
			return kb(mb(b || "", a))
		}
		c.lg = mb;

		function Y(b, c) {
			var a = "";
			m(c, function(c) {
				a && (a += b);
				a += c
			});
			return a
		}

		function E(a, c, b) {
			u(a, Y(" ", y(W(M(u(a)), M(c)), M(b))))
		}
		c.kd = function(a) {
			return a.parentNode
		};
		c.X = function(a) {
			c.Bb(a, "none")
		};
		c.L = function(a, b) {
			c.Bb(a, b ? "none" : "")
		};
		c.jg = function(b, a) {
			b.removeAttribute(a)
		};
		c.Dg = function() {
			return p() && l < 10
		};
		c.Hg = function(d, c) {
			if(c) d.style.clip = "rect(" + b.round(c.f) + "px " + b.round(c.v) + "px " + b.round(c.z) + "px " + b.round(c.e) + "px)";
			else {
				var g = d.style.cssText,
					f = [new RegExp(/[\s]*clip: rect\(.*?\)[;]?/i), new RegExp(/[\s]*cliptop: .*?[;]?/i), new RegExp(/[\s]*clipright: .*?[;]?/i), new RegExp(/[\s]*clipbottom: .*?[;]?/i), new RegExp(/[\s]*clipleft: .*?[;]?/i)],
					e = F(g, f, "");
				a.Vb(d, e)
			}
		};
		c.lb = function() {
			return +new Date
		};
		c.O = function(b, a) {
			b.appendChild(a)
		};
		c.Yb = function(b, a, c) {
			(c || a.parentNode).insertBefore(b, a)
		};
		c.Mb = function(a, b) {
			(b || a.parentNode).removeChild(a)
		};
		c.Oe = function(a, b) {
			m(a, function(a) {
				c.Mb(a, b)
			})
		};
		c.Bc = function(a) {
			c.Oe(c.ab(a, d), a)
		};
		c.Vf = function(a, b) {
			var d = c.kd(a);
			b & 1 && c.R(a, (c.o(d) - c.o(a)) / 2);
			b & 2 && c.P(a, (c.r(d) - c.r(a)) / 2)
		};
		c.Tb = function(b, a) {
			return parseInt(b, a || 10)
		};
		var o = parseFloat;
		c.wc = o;
		c.ug = function(b, a) {
			var c = g.body;
			while(a && b !== a && c !== a) try {
				a = a.parentNode
			} catch(d) {
				return i
			}
			return b === a
		};

		function U(e, d, b) {
			var a = e.cloneNode(!d);
			!b && c.jg(a, "id");
			return a
		}
		c.fb = U;
		c.Gb = function(f, g) {
			var a = new Image;

			function b(f, d) {
				c.W(a, "load", b);
				c.W(a, "abort", e);
				c.W(a, "error", e);
				g && g(a, d)
			}

			function e(a) {
				b(a, d)
			}
			if(cb() && l < 11.6 || !f) b(!f);
			else {
				c.i(a, "load", b);
				c.i(a, "abort", e);
				c.i(a, "error", e);
				a.src = f
			}
		};
		c.Xd = function(e, a, f) {
			var d = e.length + 1;

			function b(b) {
				d--;
				if(a && b && b.src == a.src) a = b;
				!d && f && f(a)
			}
			m(e, function(a) {
				c.Gb(a.src, b)
			});
			b()
		};
		c.qd = function(b, g, i, h) {
			if(h) b = U(b);
			var c = P(b, g);
			if(!c.length) c = a.zg(b, g);
			for(var f = c.length - 1; f > -1; f--) {
				var d = c[f],
					e = U(i);
				u(e, u(d));
				a.Vb(e, d.style.cssText);
				a.Yb(e, d);
				a.Mb(d)
			}
			return b
		};

		function Hb(b) {
			var l = this,
				p = "",
				r = ["av", "pv", "ds", "dn"],
				f = [],
				q, j = 0,
				h = 0,
				e = 0;

			function i() {
				E(b, q, f[e || j || h & 2 || h]);
				a.cb(b, "pointer-events", e ? "none" : "")
			}

			function d() {
				j = 0;
				i();
				c.W(g, "mouseup", d);
				c.W(g, "touchend", d);
				c.W(g, "touchcancel", d)
			}

			function o(a) {
				if(e) c.hc(a);
				else {
					j = 4;
					i();
					c.i(g, "mouseup", d);
					c.i(g, "touchend", d);
					c.i(g, "touchcancel", d)
				}
			}
			l.gd = function(a) {
				if(a === k) return h;
				h = a & 2 || a & 1;
				i()
			};
			l.id = function(a) {
				if(a === k) return !e;
				e = a ? 0 : 3;
				i()
			};
			l.S = b = c.ub(b);
			var n = a.lg(u(b));
			if(n) p = n.shift();
			m(r, function(a) {
				f.push(p + a)
			});
			q = Y(" ", f);
			f.unshift("");
			c.i(b, "mousedown", o);
			c.i(b, "touchstart", o)
		}
		c.ec = function(a) {
			return new Hb(a)
		};
		c.cb = A;
		c.xb = h("overflow");
		c.P = h("top", 2);
		c.R = h("left", 2);
		c.o = h("width", 2);
		c.r = h("height", 2);
		c.Sg = h("marginLeft", 2);
		c.Rg = h("marginTop", 2);
		c.J = h("position");
		c.Bb = h("display");
		c.N = h("zIndex", 1);
		c.Kb = function(b, a, c) {
			if(a != k) Fb(b, a, c);
			else return Db(b)
		};
		c.Vb = function(a, b) {
			if(b != k) a.style.cssText = b;
			else return a.style.cssText
		};
		var Q = {
				a: c.Kb,
				f: c.P,
				e: c.R,
				T: c.o,
				U: c.r,
				Hb: c.J,
				V: c.N
			},
			K;

		function G() {
			if(!K) K = y({
				c: c.Hg,
				H: c.mg
			}, Q);
			return K
		}

		function eb() {
			var a = {};
			a.H = a.H;
			a.H = a.B;
			a.H = a.Db;
			a.H = a.Fb;
			a.H = a.gc;
			a.H = a.bc;
			a.H = a.Qb;
			a.H = a.Ub;
			a.H = a.ac;
			return G()
		}
		c.ve = G;
		c.ld = eb;
		c.ue = function(c, b) {
			G();
			var a = {};
			m(b, function(d, b) {
				if(Q[b]) a[b] = Q[b](c)
			});
			return a
		};
		c.hb = function(c, b) {
			var a = G();
			m(b, function(d, b) {
				a[b] && a[b](c, d)
			})
		};
		c.te = function(b, a) {
			eb();
			c.hb(b, a)
		};
		var D = new function() {
			var a = this;

			function b(d, g) {
				for(var j = d[0].length, i = d.length, h = g[0].length, f = [], c = 0; c < i; c++)
					for(var k = f[c] = [], b = 0; b < h; b++) {
						for(var e = 0, a = 0; a < j; a++) e += d[c][a] * g[a][b];
						k[b] = e
					}
				return f
			}
			a.vb = function(b, c) {
				return a.Qd(b, c, 0)
			};
			a.yb = function(b, c) {
				return a.Qd(b, 0, c)
			};
			a.Qd = function(a, c, d) {
				return b(a, [
					[c, 0],
					[0, d]
				])
			};
			a.Zb = function(d, c) {
				var a = b(d, [
					[c.x],
					[c.y]
				]);
				return w(a[0][0], a[1][0])
			}
		};
		c.Og = function(d, a, c) {
			var e = b.cos(d),
				f = b.sin(d);
			return [
				[e * a, -f * c],
				[f * a, e * c]
			]
		};
		c.Qg = function(d, c, a) {
			var e = D.Zb(d, w(-c / 2, -a / 2)),
				f = D.Zb(d, w(c / 2, -a / 2)),
				g = D.Zb(d, w(c / 2, a / 2)),
				h = D.Zb(d, w(-c / 2, a / 2));
			return w(b.min(e.x, f.x, g.x, h.x) + c / 2, b.min(e.y, f.y, g.y, h.y) + a / 2)
		};
		var zb = {
			p: 1,
			vb: 1,
			yb: 1,
			B: 0,
			Db: 0,
			Fb: 0,
			Qb: 0,
			Ub: 0,
			ac: 0,
			gc: 0,
			bc: 0
		};
		c.vc = function(b) {
			var c = b || {};
			if(b)
				if(a.pd(b)) c = {
					tb: c
				};
				else if(a.pd(b.c)) c.c = {
				tb: b.c
			};
			return c
		};

		function jb(d, a) {
			var b = {};
			m(d, function(d, e) {
				var f = d;
				if(a[e] != k)
					if(c.dc(d)) f = d + a[e];
					else f = jb(d, a[e]);
				b[e] = f
			});
			return b
		}
		c.re = jb;
		c.xd = function(h, i, w, n, y, z, o) {
			var c = i;
			if(h) {
				c = {};
				for(var g in i) {
					var A = z[g] || 1,
						v = y[g] || [0, 1],
						d = (w - v[0]) / v[1];
					d = b.min(b.max(d, 0), 1);
					d = d * A;
					var u = b.floor(d);
					if(d != u) d -= u;
					var l = n.tb || e.tc,
						m, B = h[g],
						q = i[g];
					if(a.dc(q)) {
						l = n[g] || l;
						var x = l(d);
						m = B + q * x
					} else {
						m = a.u({
							Ib: {}
						}, h[g]);
						a.g(q.Ib || q, function(e, a) {
							if(n.c) l = n.c[a] || n.c.tb || l;
							var c = l(d),
								b = e * c;
							m.Ib[a] = b;
							m[a] += b
						})
					}
					c[g] = m
				}
				var t, f = {
					ob: o.ob,
					nb: o.nb
				};
				a.g(zb, function(d, a) {
					t = t || i[a];
					var b = c[a];
					if(b != k) {
						if(b != d) f[a] = b;
						delete c[a]
					} else if(h[a] != k && h[a] != d) f[a] = h[a]
				});
				if(i.p && f.p) {
					f.vb = f.p;
					f.yb = f.p
				}
				c.H = f
			}
			if(i.c && o.mb) {
				var p = c.c.Ib,
					s = (p.f || 0) + (p.z || 0),
					r = (p.e || 0) + (p.v || 0);
				c.e = (c.e || 0) + r;
				c.f = (c.f || 0) + s;
				c.c.e -= r;
				c.c.v -= r;
				c.c.f -= s;
				c.c.z -= s
			}
			if(c.c && a.Dg() && !c.c.f && !c.c.e && c.c.v == o.ob && c.c.z == o.nb) c.c = j;
			return c
		}
	};

	function m() {
		var b = this,
			d = [];

		function i(a, b) {
			d.push({
				Ac: a,
				rc: b
			})
		}

		function h(b, c) {
			a.g(d, function(a, e) {
				a.Ac == b && a.rc === c && d.splice(e, 1)
			})
		}
		b.Nb = b.addEventListener = i;
		b.removeEventListener = h;
		b.s = function(b) {
			var c = [].slice.call(arguments, 1);
			a.g(d, function(a) {
				a.Ac == b && a.rc.apply(f, c)
			})
		}
	}
	var l = f.$JssorAnimator$ = function(y, C, k, O, L, K) {
		y = y || 0;
		var c = this,
			q, n, o, u, z = 0,
			G, H, F, B, x = 0,
			h = 0,
			m = 0,
			D, l, g, e, p, w = [],
			A;

		function N(a) {
			g += a;
			e += a;
			l += a;
			h += a;
			m += a;
			x += a
		}

		function t(n) {
			var f = n;
			if(p && (f >= e || f <= g)) f = ((f - g) % p + p) % p + g;
			if(!D || u || h != f) {
				var i = b.min(f, e);
				i = b.max(i, g);
				if(!D || u || i != m) {
					if(K) {
						var j = (i - l) / (C || 1);
						if(k.Ic) j = 1 - j;
						var o = a.xd(L, K, j, G, F, H, k);
						a.g(o, function(b, a) {
							A[a] && A[a](O, b)
						})
					}
					c.Gc(m - l, i - l);
					m = i;
					a.g(w, function(b, c) {
						var a = n < h ? w[w.length - c - 1] : b;
						a.F(m - x)
					});
					var r = h,
						q = m;
					h = f;
					D = d;
					c.Rb(r, q)
				}
			}
		}

		function E(a, c, d) {
			c && a.Y(e);
			if(!d) {
				g = b.min(g, a.Fc() + x);
				e = b.max(e, a.ib() + x)
			}
			w.push(a)
		}
		var r = f.requestAnimationFrame || f.webkitRequestAnimationFrame || f.mozRequestAnimationFrame || f.msRequestAnimationFrame;
		if(a.Eg() && a.wd() < 7) r = j;
		r = r || function(b) {
			a.D(b, k.qb)
		};

		function I() {
			if(q) {
				var d = a.lb(),
					e = b.min(d - z, k.Kd),
					c = h + e * o;
				z = d;
				if(c * o >= n * o) c = n;
				t(c);
				if(!u && c * o >= n * o) J(B);
				else r(I)
			}
		}

		function s(f, i, j) {
			if(!q) {
				q = d;
				u = j;
				B = i;
				f = b.max(f, g);
				f = b.min(f, e);
				n = f;
				o = n < h ? -1 : 1;
				c.Ld();
				z = a.lb();
				r(I)
			}
		}

		function J(a) {
			if(q) {
				u = q = B = i;
				c.Md();
				a && a()
			}
		}
		c.Nd = function(a, b, c) {
			s(a ? h + a : e, b, c)
		};
		c.Rd = s;
		c.sb = J;
		c.ye = function(a) {
			s(a)
		};
		c.eb = function() {
			return h
		};
		c.ad = function() {
			return n
		};
		c.Cb = function() {
			return m
		};
		c.F = t;
		c.mb = function(a) {
			t(h + a)
		};
		c.ed = function() {
			return q
		};
		c.De = function(a) {
			p = a
		};
		c.Y = N;
		c.M = function(a, b) {
			E(a, 0, b)
		};
		c.Pc = function(a) {
			E(a, 1)
		};
		c.Ge = function(a) {
			e += a
		};
		c.Fc = function() {
			return g
		};
		c.ib = function() {
			return e
		};
		c.Rb = c.Ld = c.Md = c.Gc = a.cd;
		c.Oc = a.lb();
		k = a.u({
			qb: 16,
			Kd: 50
		}, k);
		p = k.fd;
		A = a.u({}, a.ve(), k.Sc);
		g = l = y;
		e = y + C;
		H = k.ic || {};
		F = k.C || {};
		G = a.vc(k.j)
	};
	var o = f.$JssorSlideshowFormations$ = new function() {
			var h = this;

			function g(b, a, c) {
				c.push(a);
				b[a] = b[a] || [];
				b[a].push(c)
			}
			h.de = function(d) {
				for(var e = [], a, c = 0; c < d.E; c++)
					for(a = 0; a < d.q; a++) g(e, b.ceil(1e5 * b.random()) % 13, [c, a]);
				return e
			}
		},
		r = f.$JssorSlideshowRunner$ = function(n, s, q, t, y) {
			var f = this,
				u, g, c, x = 0,
				w = t.Ud,
				r, h = 8;

			function k(g, f) {
				var c = {
					qb: f,
					k: 1,
					D: 0,
					q: 1,
					E: 1,
					a: 0,
					p: 0,
					c: 0,
					mb: i,
					A: i,
					Ic: i,
					pe: o.de,
					G: {
						bb: 0,
						pb: 0
					},
					j: e.tc,
					ic: {},
					oc: [],
					C: {}
				};
				a.u(c, g);
				c.j = a.vc(c.j);
				c.be = b.ceil(c.k / c.qb);
				c.ae = function(b, a) {
					b /= c.q;
					a /= c.E;
					var f = b + "x" + a;
					if(!c.oc[f]) {
						c.oc[f] = {
							T: b,
							U: a
						};
						for(var d = 0; d < c.q; d++)
							for(var e = 0; e < c.E; e++) c.oc[f][e + "," + d] = {
								f: e * a,
								v: d * b + b,
								z: e * a + a,
								e: d * b
							}
					}
					return c.oc[f]
				};
				if(c.Mc) {
					c.Mc = k(c.Mc, f);
					c.A = d
				}
				return c
			}

			function p(A, h, c, v, n, l) {
				var y = this,
					t, u = {},
					j = {},
					m = [],
					f, e, r, p = c.G.bb || 0,
					q = c.G.pb || 0,
					g = c.ae(n, l),
					o = B(c),
					C = o.length - 1,
					s = c.k + c.D * C,
					w = v + s,
					k = c.A,
					x;
				w += 50;

				function B(a) {
					var b = a.pe(a);
					return a.Ic ? b.reverse() : b
				}
				y.nd = w;
				y.jc = function(d) {
					d -= v;
					var e = d < s;
					if(e || x) {
						x = e;
						if(!k) d = s - d;
						var f = b.ceil(d / c.qb);
						a.g(j, function(c, e) {
							var d = b.max(f, c.Fe);
							d = b.min(d, c.length - 1);
							if(c.Id != d) {
								if(!c.Id && !k) a.L(m[e]);
								else d == c.Be && k && a.X(m[e]);
								c.Id = d;
								a.te(m[e], c[d])
							}
						})
					}
				};
				h = a.fb(h);
				if(a.kb()) {
					var D = !h["no-image"],
						z = a.Ag(h);
					a.g(z, function(b) {
						(D || b["jssor-slider"]) && a.Kb(b, a.Kb(b), d)
					})
				}
				a.g(o, function(h, m) {
					a.g(h, function(G) {
						var K = G[0],
							J = G[1],
							v = K + "," + J,
							o = i,
							s = i,
							x = i;
						if(p && J % 2) {
							if(p & 3) o = !o;
							if(p & 12) s = !s;
							if(p & 16) x = !x
						}
						if(q && K % 2) {
							if(q & 3) o = !o;
							if(q & 12) s = !s;
							if(q & 16) x = !x
						}
						c.f = c.f || c.c & 4;
						c.z = c.z || c.c & 8;
						c.e = c.e || c.c & 1;
						c.v = c.v || c.c & 2;
						var E = s ? c.z : c.f,
							B = s ? c.f : c.z,
							D = o ? c.v : c.e,
							C = o ? c.e : c.v;
						c.c = E || B || D || C;
						r = {};
						e = {
							f: 0,
							e: 0,
							a: 1,
							T: n,
							U: l
						};
						f = a.u({}, e);
						t = a.u({}, g[v]);
						if(c.a) e.a = 2 - c.a;
						if(c.V) {
							e.V = c.V;
							f.V = 0
						}
						var I = c.q * c.E > 1 || c.c;
						if(c.p || c.B) {
							var H = d;
							if(a.kb())
								if(c.q * c.E > 1) H = i;
								else I = i;
							if(H) {
								e.p = c.p ? c.p - 1 : 1;
								f.p = 1;
								if(a.kb() || a.Cc()) e.p = b.min(e.p, 2);
								var N = c.B || 0;
								e.B = N * 360 * (x ? -1 : 1);
								f.B = 0
							}
						}
						if(I) {
							var h = t.Ib = {};
							if(c.c) {
								var w = c.Me || 1;
								if(E && B) {
									h.f = g.U / 2 * w;
									h.z = -h.f
								} else if(E) h.z = -g.U * w;
								else if(B) h.f = g.U * w;
								if(D && C) {
									h.e = g.T / 2 * w;
									h.v = -h.e
								} else if(D) h.v = -g.T * w;
								else if(C) h.e = g.T * w
							}
							r.c = t;
							f.c = g[v]
						}
						var L = o ? 1 : -1,
							M = s ? 1 : -1;
						if(c.x) e.e += n * c.x * L;
						if(c.y) e.f += l * c.y * M;
						a.g(e, function(b, c) {
							if(a.dc(b))
								if(b != f[c]) r[c] = b - f[c]
						});
						u[v] = k ? f : e;
						var F = c.be,
							A = b.round(m * c.D / c.qb);
						j[v] = new Array(A);
						j[v].Fe = A;
						j[v].Be = A + F - 1;
						for(var z = 0; z <= F; z++) {
							var y = a.xd(f, r, z / F, c.j, c.C, c.ic, {
								mb: c.mb,
								ob: n,
								nb: l
							});
							y.V = y.V || 1;
							j[v].push(y)
						}
					})
				});
				o.reverse();
				a.g(o, function(b) {
					a.g(b, function(c) {
						var f = c[0],
							e = c[1],
							d = f + "," + e,
							b = h;
						if(e || f) b = a.fb(h);
						a.hb(b, u[d]);
						a.xb(b, "hidden");
						a.J(b, "absolute");
						A.qe(b);
						m[d] = b;
						a.L(b, !k)
					})
				})
			}

			function v() {
				var a = this,
					b = 0;
				l.call(a, 0, u);
				a.Rb = function(d, a) {
					if(a - b > h) {
						b = a;
						c && c.jc(a);
						g && g.jc(a)
					}
				};
				a.jb = r
			}
			f.se = function() {
				var a = 0,
					c = t.gb,
					d = c.length;
				if(w) a = x++ % d;
				else a = b.floor(b.random() * d);
				c[a] && (c[a].rb = a);
				return c[a]
			};
			f.we = function(w, x, j, l, a) {
				r = a;
				a = k(a, h);
				var i = l.Yc,
					e = j.Yc;
				i["no-image"] = !l.kc;
				e["no-image"] = !j.kc;
				var m = i,
					o = e,
					v = a,
					d = a.Mc || k({}, h);
				if(!a.A) {
					m = e;
					o = i
				}
				var t = d.Y || 0;
				g = new p(n, o, d, b.max(t - d.qb, 0), s, q);
				c = new p(n, m, v, b.max(d.qb - t, 0), s, q);
				g.jc(0);
				c.jc(0);
				u = b.max(g.nd, c.nd);
				f.rb = w
			};
			f.Ob = function() {
				n.Ob();
				g = j;
				c = j
			};
			f.fe = function() {
				var a = j;
				if(c) a = new v;
				return a
			};
			if(a.kb() || a.Cc() || y && a.hg() < 537) h = 16;
			m.call(f);
			l.call(f, -1e7, 1e7)
		},
		h = f.$JssorSlider$ = function(p, cc) {
			var o = this;

			function yc() {
				var a = this;
				l.call(a, -1e8, 2e8);
				a.ie = function() {
					var c = a.Cb(),
						d = b.floor(c),
						f = t(d),
						e = c - b.floor(c);
					return {
						rb: f,
						ge: d,
						Hb: e
					}
				};
				a.Rb = function(c, a) {
					var e = b.floor(a);
					if(e != a && a > c) e++;
					Rb(e, d);
					o.s(h.Vd, t(a), t(c), a, c)
				}
			}

			function xc() {
				var b = this;
				l.call(b, 0, 0, {
					fd: r
				});
				a.g(C, function(a) {
					D & 1 && a.De(r);
					b.Pc(a);
					a.Y(ib / Yb)
				})
			}

			function wc() {
				var a = this,
					b = Tb.S;
				l.call(a, -1, 2, {
					j: e.md,
					Sc: {
						Hb: Xb
					},
					fd: r
				}, b, {
					Hb: 1
				}, {
					Hb: -2
				});
				a.qc = b
			}

			function jc(n, m) {
				var a = this,
					e, f, g, k, b;
				l.call(a, -1e8, 2e8, {
					Kd: 100
				});
				a.Ld = function() {
					M = d;
					S = j;
					o.s(h.gg, t(w.eb()), w.eb())
				};
				a.Md = function() {
					M = i;
					k = i;
					var a = w.ie();
					o.s(h.Yd, t(w.eb()), w.eb());
					!a.Hb && Ac(a.ge, s)
				};
				a.Rb = function(i, h) {
					var a;
					if(k) a = b;
					else {
						a = f;
						if(g) {
							var d = h / g;
							a = c.Wd(d) * (f - e) + e
						}
					}
					w.F(a)
				};
				a.Wb = function(b, d, c, h) {
					e = b;
					f = d;
					g = c;
					w.F(b);
					a.F(0);
					a.Rd(c, h)
				};
				a.Zd = function(c) {
					k = d;
					b = c;
					a.Nd(c, j, d)
				};
				a.ee = function(a) {
					b = a
				};
				w = new yc;
				w.M(n);
				w.M(m)
			}

			function lc() {
				var c = this,
					b = Vb();
				a.N(b, 0);
				a.cb(b, "pointerEvents", "none");
				c.S = b;
				c.qe = function(c) {
					a.O(b, c);
					a.L(b)
				};
				c.Ob = function() {
					a.X(b);
					a.Bc(b)
				}
			}

			function vc(n, f) {
				var e = this,
					q, L, v, k, y = [],
					x, B, W, G, Q, F, g, w, p;
				l.call(e, -u, u + 1, {});

				function E(b) {
					q && q.zb();
					T(n, b, 0);
					F = d;
					q = new I.Z(n, I, a.wc(a.n(n, "idle")) || ic);
					q.F(0)
				}

				function Z() {
					q.Oc < I.Oc && E()
				}

				function M(p, r, n) {
					if(!G) {
						G = d;
						if(k && n) {
							var g = n.width,
								b = n.height,
								m = g,
								l = b;
							if(g && b && c.Lb) {
								if(c.Lb & 3 && (!(c.Lb & 4) || g > K || b > J)) {
									var j = i,
										q = K / J * b / g;
									if(c.Lb & 1) j = q > 1;
									else if(c.Lb & 2) j = q < 1;
									m = j ? g * J / b : K;
									l = j ? J : b * K / g
								}
								a.o(k, m);
								a.r(k, l);
								a.P(k, (J - l) / 2);
								a.R(k, (K - m) / 2)
							}
							a.J(k, "absolute");
							o.s(h.ce, f)
						}
					}
					a.X(r);
					p && p(e)
				}

				function Y(b, c, d, g) {
					if(g == S && s == f && N)
						if(!zc) {
							var a = t(b);
							A.we(a, f, c, e, d);
							c.he();
							U.Y(a - U.Fc() - 1);
							U.F(a);
							z.Wb(b, b, 0)
						}
				}

				function cb(b) {
					if(b == S && s == f) {
						if(!g) {
							var a = j;
							if(A)
								if(A.rb == f) a = A.fe();
								else A.Ob();
							Z();
							g = new sc(n, f, a, q);
							g.od(p)
						}!g.ed() && g.Tc()
					}
				}

				function R(d, h, l) {
					if(d == f) {
						if(d != h) C[h] && C[h].ke();
						else !l && g && g.Je();
						p && p.id();
						var m = S = a.lb();
						e.Gb(a.Q(j, cb, m))
					} else {
						var k = b.min(f, d),
							i = b.max(f, d),
							o = b.min(i - k, k + r - i),
							n = u + c.Ie - 1;
						(!Q || o <= n) && e.Gb()
					}
				}

				function db() {
					if(s == f && g) {
						g.sb();
						p && p.He();
						p && p.Ce();
						g.dd()
					}
				}

				function eb() {
					s == f && g && g.sb()
				}

				function ab(a) {
					!P && o.s(h.je, f, a)
				}

				function O() {
					p = w.pInstance;
					g && g.od(p)
				}
				e.Gb = function(c, b) {
					b = b || v;
					if(y.length && !G) {
						a.L(b);
						if(!W) {
							W = d;
							o.s(h.Ae, f);
							a.g(y, function(b) {
								if(!a.K(b, "src")) {
									b.src = a.n(b, "src2");
									a.Bb(b, b["display-origin"])
								}
							})
						}
						a.Xd(y, k, a.Q(j, M, c, b))
					} else M(c, b)
				};
				e.Le = function() {
					var h = f;
					if(c.Wc < 0) h -= r;
					var d = h + c.Wc * qc;
					if(D & 2) d = t(d);
					if(!(D & 1)) d = b.max(0, b.min(d, r - u));
					if(d != f) {
						if(A) {
							var e = A.se(r);
							if(e) {
								var i = S = a.lb(),
									g = C[t(d)];
								return g.Gb(a.Q(j, Y, d, g, e, i), v)
							}
						}
						bb(d)
					}
				};
				e.Qc = function() {
					R(f, f, d)
				};
				e.ke = function() {
					p && p.He();
					p && p.Ce();
					e.td();
					g && g.le();
					g = j;
					E()
				};
				e.he = function() {
					a.X(n)
				};
				e.td = function() {
					a.L(n)
				};
				e.me = function() {
					p && p.id()
				};

				function T(b, c, e) {
					if(a.K(b, "jssor-slider")) return;
					if(!F) {
						if(b.tagName == "IMG") {
							y.push(b);
							if(!a.K(b, "src")) {
								Q = d;
								b["display-origin"] = a.Bb(b);
								a.X(b)
							}
						}
						a.kb() && a.N(b, (a.N(b) || 0) + 1)
					}
					var f = a.ab(b);
					a.g(f, function(f) {
						var h = f.tagName,
							j = a.n(f, "u");
						if(j == "player" && !w) {
							w = f;
							if(w.pInstance) O();
							else a.i(w, "dataavailable", O)
						}
						if(j == "caption") {
							if(c) {
								a.Sd(f, a.n(f, "to"));
								a.ng(f, a.n(f, "bf"));
								a.og(f, "preserve-3d")
							} else if(!a.Cd()) {
								var g = a.fb(f, i, d);
								a.Yb(g, f, b);
								a.Mb(f, b);
								f = g;
								c = d
							}
						} else if(!F && !e && !k) {
							if(h == "A") {
								if(a.n(f, "u") == "image") k = a.Ne(f, "IMG");
								else k = a.I(f, "image", d);
								if(k) {
									x = f;
									a.Bb(x, "block");
									a.hb(x, V);
									B = a.fb(x, d);
									a.J(x, "relative");
									a.Kb(B, 0);
									a.cb(B, "backgroundColor", "#000")
								}
							} else if(h == "IMG" && a.n(f, "u") == "image") k = f;
							if(k) {
								k.border = 0;
								a.hb(k, V)
							}
						}
						T(f, c, e + 1)
					})
				}
				e.Gc = function(c, b) {
					var a = u - b;
					Xb(L, a)
				};
				e.rb = f;
				m.call(e);
				a.pg(n, a.n(n, "p"));
				a.qg(n, a.n(n, "po"));
				var H = a.I(n, "thumb", d);
				if(H) {
					e.ne = a.fb(H);
					a.X(H)
				}
				a.L(n);
				v = a.fb(fb);
				a.N(v, 1e3);
				a.i(n, "tap", ab);
				E(d);
				e.kc = k;
				e.Jd = B;
				e.Yc = n;
				e.qc = L = n;
				a.O(L, v);
				o.Nb(203, R);
				o.Nb(28, eb);
				o.Nb(24, db)
			}

			function sc(y, f, p, q) {
				var b = this,
					m = 0,
					u = 0,
					g, j, e, c, k, t, r, n = C[f];
				l.call(b, 0, 0);

				function v() {
					a.Bc(L);
					Zb && k && n.Jd && a.O(L, n.Jd);
					a.L(L, !k && n.kc)
				}

				function w() {
					b.Tc()
				}

				function x(a) {
					r = a;
					b.sb();
					b.Tc()
				}
				b.Tc = function() {
					var a = b.Cb();
					if(!B && !M && !r && s == f) {
						if(!a) {
							if(g && !k) {
								k = d;
								b.dd(d);
								o.s(h.oe, f, m, u, g, c)
							}
							v()
						}
						var i, p = h.Zc;
						if(a != c)
							if(a == e) i = c;
							else if(a == j) i = e;
						else if(!a) i = j;
						else i = b.ad();
						o.s(p, f, a, m, j, e, c);
						var l = N && (!E || F);
						if(a == c)(e != c && !(E & 12) || l) && n.Le();
						else(l || a != e) && b.Rd(i, w)
					}
				};
				b.Je = function() {
					e == c && e == b.Cb() && b.F(j)
				};
				b.le = function() {
					A && A.rb == f && A.Ob();
					var a = b.Cb();
					a < c && o.s(h.Zc, f, -a - 1, m, j, e, c)
				};
				b.dd = function(b) {
					p && a.xb(jb, b && p.jb.eh ? "" : "hidden")
				};
				b.Gc = function(b, a) {
					if(k && a >= g) {
						k = i;
						v();
						n.td();
						A.Ob();
						o.s(h.ze, f, m, u, g, c)
					}
					o.s(h.Ee, f, a, m, j, e, c)
				};
				b.od = function(a) {
					if(a && !t) {
						t = a;
						a.Nb($JssorPlayer$.xe, x)
					}
				};
				p && b.Pc(p);
				g = b.ib();
				b.Pc(q);
				j = g + q.Sb;
				e = g + q.cc;
				c = b.ib()
			}

			function Xb(g, f) {
				var e = x > 0 ? x : eb,
					c = zb * f * (e & 1),
					d = Ab * f * (e >> 1 & 1);
				c = b.round(c);
				d = b.round(d);
				a.R(g, c);
				a.P(g, d)
			}

			function Nb() {
				pb = M;
				Ib = z.ad();
				G = w.eb()
			}

			function ec() {
				Nb();
				if(B || !F && E & 12) {
					z.sb();
					o.s(h.Ke)
				}
			}

			function bc(f) {
				if(!B && (F || !(E & 12)) && !z.ed()) {
					var d = w.eb(),
						a = b.ceil(G);
					if(f && b.abs(H) >= c.Od) {
						a = b.ceil(d);
						a += hb
					}
					if(!(D & 1)) a = b.min(r - u, b.max(a, 0));
					var e = b.abs(a - d);
					e = 1 - b.pow(1 - e, 5);
					if(!P && pb) z.ye(Ib);
					else if(d == a) {
						sb.me();
						sb.Qc()
					} else z.Wb(d, a, e * Sb)
				}
			}

			function Hb(b) {
				!a.n(a.uc(b), "nodrag") && a.hc(b)
			}

			function oc(a) {
				Wb(a, 1)
			}

			function Wb(b, c) {
				b = a.Dd(b);
				var k = a.uc(b);
				if(!O && !a.n(k, "nodrag") && pc() && (!c || b.touches.length == 1)) {
					B = d;
					yb = i;
					S = j;
					a.i(g, c ? "touchmove" : "mousemove", Bb);
					a.lb();
					P = 0;
					ec();
					if(!pb) x = 0;
					if(c) {
						var f = b.touches[0];
						ub = f.clientX;
						vb = f.clientY
					} else {
						var e = a.Fd(b);
						ub = e.x;
						vb = e.y
					}
					H = 0;
					gb = 0;
					hb = 0;
					o.s(h.Pg, t(G), G, b)
				}
			}

			function Bb(e) {
				if(B) {
					e = a.Dd(e);
					var f;
					if(e.type != "mousemove") {
						var l = e.touches[0];
						f = {
							x: l.clientX,
							y: l.clientY
						}
					} else f = a.Fd(e);
					if(f) {
						var j = f.x - ub,
							k = f.y - vb;
						if(b.floor(G) != G) x = x || eb & O;
						if((j || k) && !x) {
							if(O == 3)
								if(b.abs(k) > b.abs(j)) x = 2;
								else x = 1;
							else x = O;
							if(mb && x == 1 && b.abs(k) - b.abs(j) > 3) yb = d
						}
						if(x) {
							var c = k,
								i = Ab;
							if(x == 1) {
								c = j;
								i = zb
							}
							if(!(D & 1)) {
								if(c > 0) {
									var g = i * s,
										h = c - g;
									if(h > 0) c = g + b.sqrt(h) * 5
								}
								if(c < 0) {
									var g = i * (r - u - s),
										h = -c - g;
									if(h > 0) c = -g - b.sqrt(h) * 5
								}
							}
							if(H - gb < -2) hb = 0;
							else if(H - gb > 2) hb = -1;
							gb = H;
							H = c;
							rb = G - H / i / (Y || 1);
							if(H && x && !yb) {
								a.hc(e);
								if(!M) z.Zd(rb);
								else z.ee(rb)
							}
						}
					}
				}
			}

			function ab() {
				nc();
				if(B) {
					B = i;
					a.lb();
					a.W(g, "mousemove", Bb);
					a.W(g, "touchmove", Bb);
					P = H;
					z.sb();
					var b = w.eb();
					o.s(h.Ug, t(b), b, t(G), G);
					E & 12 && Nb();
					bc(d)
				}
			}

			function fc(c) {
				if(P) {
					a.xg(c);
					var b = a.uc(c);
					while(b && v !== b) {
						b.tagName == "A" && a.hc(c);
						try {
							b = b.parentNode
						} catch(d) {
							break
						}
					}
				}
			}

			function hc(a) {
				C[s];
				s = t(a);
				sb = C[s];
				Rb(a);
				return s
			}

			function Ac(a, b) {
				x = 0;
				hc(a);
				o.s(h.ig, t(a), b)
			}

			function Rb(b, c) {
				wb = b;
				a.g(T, function(a) {
					a.zc(t(b), b, c)
				})
			}

			function pc() {
				var b = h.jd || 0,
					a = X;
				if(mb) a & 1 && (a &= 1);
				h.jd |= a;
				return O = a & ~b
			}

			function nc() {
				if(O) {
					h.jd &= ~X;
					O = 0
				}
			}

			function Vb() {
				var b = a.wb();
				a.hb(b, V);
				a.J(b, "absolute");
				return b
			}

			function t(a) {
				return(a % r + r) % r
			}

			function gc(a, d) {
				if(d)
					if(!D) {
						a = b.min(b.max(a + wb, 0), r - u);
						d = i
					} else if(D & 2) {
					a = t(a + wb);
					d = i
				}
				bb(a, c.yc, d)
			}

			function xb() {
				a.g(T, function(a) {
					a.xc(a.fc.Xg <= F)
				})
			}

			function Cc() {
				if(!F) {
					F = 1;
					xb();
					if(!B) {
						E & 12 && bc();
						E & 3 && C[s].Qc()
					}
				}
			}

			function Bc() {
				if(F) {
					F = 0;
					xb();
					B || !(E & 12) || ec()
				}
			}

			function Dc() {
				V = {
					T: K,
					U: J,
					f: 0,
					e: 0
				};
				a.g(Q, function(b) {
					a.hb(b, V);
					a.J(b, "absolute");
					a.xb(b, "hidden");
					a.X(b)
				});
				a.hb(fb, V)
			}

			function ob(b, a) {
				bb(b, a, d)
			}

			function bb(g, f, l) {
				if(Pb && (!B && (F || !(E & 12)) || c.Ad)) {
					M = d;
					B = i;
					z.sb();
					if(f == k) f = Sb;
					var e = Cb.Cb(),
						a = g;
					if(l) {
						a = e + g;
						if(g > 0) a = b.ceil(a);
						else a = b.floor(a)
					}
					if(D & 2) a = t(a);
					if(!(D & 1)) a = b.max(0, b.min(a, r - u));
					var j = (a - e) % r;
					a = e + j;
					var h = e == a ? 0 : f * b.abs(j);
					h = b.min(h, f * u * 1.5);
					z.Wb(e, a, h || 1)
				}
			}
			o.vg = bb;
			o.Nd = function() {
				if(!N) {
					N = d;
					C[s] && C[s].Qc()
				}
			};
			o.kg = function() {
				return P
			};

			function W() {
				return a.o(y || p)
			}

			function lb() {
				return a.r(y || p)
			}
			o.ob = W;
			o.nb = lb;

			function Eb(c, d) {
				if(c == k) return a.o(p);
				if(!y) {
					var b = a.wb(g);
					a.sd(b, a.sd(p));
					a.Vb(b, a.Vb(p));
					a.Bb(b, "block");
					a.J(b, "relative");
					a.P(b, 0);
					a.R(b, 0);
					a.xb(b, "visible");
					y = a.wb(g);
					a.J(y, "absolute");
					a.P(y, 0);
					a.R(y, 0);
					a.o(y, a.o(p));
					a.r(y, a.r(p));
					a.Sd(y, "0 0");
					a.O(y, b);
					var h = a.ab(p);
					a.O(p, y);
					a.cb(p, "backgroundImage", "");
					a.g(h, function(c) {
						a.O(a.n(c, "noscale") ? p : b, c);
						a.n(c, "autocenter") && Jb.push(c)
					})
				}
				Y = c / (d ? a.r : a.o)(y);
				a.rg(y, Y);
				var f = d ? Y * W() : c,
					e = d ? c : Y * lb();
				a.o(p, f);
				a.r(p, e);
				a.g(Jb, function(b) {
					var c = a.Tb(a.n(b, "autocenter"));
					a.Vf(b, c)
				})
			}
			o.Cg = Eb;
			o.yd = function(a) {
				var d = b.ceil(t(ib / Yb)),
					c = t(a - s + d);
				if(c > u) {
					if(a - s > r / 2) a -= r;
					else if(a - s <= -r / 2) a += r
				} else a = s + c - d;
				return a
			};
			m.call(o);
			o.S = p = a.ub(p);
			var c = a.u({
				Lb: 0,
				Ie: 1,
				Uc: 1,
				Dc: 0,
				Rc: i,
				Xb: 1,
				Ad: d,
				Wc: 1,
				Td: 3e3,
				ud: 1,
				yc: 500,
				Wd: e.hd,
				Od: 20,
				vd: 0,
				q: 1,
				Nc: 0,
				Mg: 1,
				Jc: 1,
				Ed: 1
			}, cc);
			if(c.Ng != k) c.Td = c.Ng;
			if(c.Hc != k) c.q = c.Hc;
			if(c.Kg != k) c.Nc = c.Kg;
			var eb = c.Jc & 3,
				qc = (c.Jc & 4) / -4 || 1,
				kb = c.Bg,
				I = a.u({
					Z: q,
					Jg: 1,
					Ig: 1
				}, c.ch);
			I.gb = I.gb || I.bh;
			var Fb = c.ah,
				Z = c.Gg,
				db = c.Fg,
				R = !c.Mg,
				y, v = a.I(p, "slides", R),
				fb = a.I(p, "loading", R) || a.wb(g),
				Lb = a.I(p, "navigator", R),
				dc = a.I(p, "arrowleft", R),
				ac = a.I(p, "arrowright", R),
				Kb = a.I(p, "thumbnavigator", R),
				mc = a.o(v),
				kc = a.r(v),
				V, Q = [],
				rc = a.ab(v);
			a.g(rc, function(b) {
				if(b.tagName == "DIV" && !a.n(b, "u")) Q.push(b);
				else a.kb() && a.N(b, (a.N(b) || 0) + 1)
			});
			var s = -1,
				wb, sb, r = Q.length,
				K = c.Lg || mc,
				J = c.Wg || kc,
				Ub = c.vd,
				zb = K + Ub,
				Ab = J + Ub,
				Yb = eb & 1 ? zb : Ab,
				u = b.min(c.q, r),
				jb, x, O, yb, T = [],
				Ob, Qb, Mb, Zb, zc, N, E = c.ud,
				ic = c.Td,
				Sb = c.yc,
				qb, tb, ib, Pb = u < r,
				D = Pb ? c.Xb : 0,
				X, P, F = 1,
				M, B, S, ub = 0,
				vb = 0,
				H, gb, hb, Cb, w, U, z, Tb = new lc,
				Y, Jb = [];
			N = c.Rc;
			o.fc = cc;
			Dc();
			a.K(p, "jssor-slider", d);
			a.N(v, a.N(v) || 0);
			a.J(v, "absolute");
			jb = a.fb(v, d);
			a.Yb(jb, v);
			if(kb) {
				Zb = kb.dh;
				qb = kb.Z;
				tb = u == 1 && r > 1 && qb && (!a.Cd() || a.wd() >= 8)
			}
			ib = tb || u >= r || !(D & 1) ? 0 : c.Nc;
			X = (u > 1 || ib ? eb : -1) & c.Ed;
			var Gb = v,
				C = [],
				A, L, Db = a.Tg(),
				mb = Db.Vg,
				G, pb, Ib, rb;
			Db.Pd && a.cb(Gb, Db.Pd, ([j, "pan-y", "pan-x", "none"])[X] || "");
			U = new wc;
			if(tb) A = new qb(Tb, K, J, kb, mb);
			a.O(jb, U.qc);
			a.xb(v, "hidden");
			L = Vb();
			a.cb(L, "backgroundColor", "#000");
			a.Kb(L, 0);
			a.Yb(L, Gb.firstChild, Gb);
			for(var cb = 0; cb < Q.length; cb++) {
				var tc = Q[cb],
					uc = new vc(tc, cb);
				C.push(uc)
			}
			a.X(fb);
			Cb = new xc;
			z = new jc(Cb, U);
			if(X) {
				a.i(v, "mousedown", Wb);
				a.i(v, "touchstart", oc);
				a.i(v, "dragstart", Hb);
				a.i(v, "selectstart", Hb);
				a.i(g, "mouseup", ab);
				a.i(g, "touchend", ab);
				a.i(g, "touchcancel", ab);
				a.i(f, "blur", ab)
			}
			E &= mb ? 10 : 5;
			if(Lb && Fb) {
				Ob = new Fb.Z(Lb, Fb, W(), lb());
				T.push(Ob)
			}
			if(Z && dc && ac) {
				Z.Xb = D;
				Z.q = u;
				Qb = new Z.Z(dc, ac, Z, W(), lb());
				T.push(Qb)
			}
			if(Kb && db) {
				db.Dc = c.Dc;
				Mb = new db.Z(Kb, db);
				T.push(Mb)
			}
			a.g(T, function(a) {
				a.Ec(r, C, fb);
				a.Nb(n.pc, gc)
			});
			a.cb(p, "visibility", "visible");
			Eb(W());
			a.i(v, "tap", fc);
			a.i(p, "mouseout", a.nc(Cc, p));
			a.i(p, "mouseover", a.nc(Bc, p));
			xb();
			c.Uc && a.i(g, "keydown", function(a) {
				if(a.keyCode == 37) ob(-c.Uc);
				else a.keyCode == 39 && ob(c.Uc)
			});
			var nb = c.Dc;
			if(!(D & 1)) nb = b.max(0, b.min(nb, r - u));
			z.Wb(nb, nb, 0)
		};
	h.je = 21;
	h.Pg = 22;
	h.Ug = 23;
	h.gg = 24;
	h.Yd = 25;
	h.Ae = 26;
	h.ce = 27;
	h.Ke = 28;
	h.Vd = 202;
	h.ig = 203;
	h.oe = 206;
	h.ze = 207;
	h.Ee = 208;
	h.Zc = 209;
	var n = {
		pc: 1
	};
	f.$JssorBulletNavigator$ = function(e, C) {
		var f = this;
		m.call(f);
		e = a.ub(e);
		var s, A, z, r, l = 0,
			c, o, k, w, x, h, g, q, p, B = [],
			y = [];

		function v(a) {
			a != -1 && y[a].gd(a == l)
		}

		function t(a) {
			f.s(n.pc, a * o)
		}
		f.S = e;
		f.zc = function(a) {
			if(a != r) {
				var d = l,
					c = b.floor(a / o);
				l = c;
				r = a;
				v(d);
				v(c)
			}
		};
		f.xc = function(b) {
			a.L(e, b)
		};
		var u;
		f.Ec = function(D) {
			if(!u) {
				s = b.ceil(D / o);
				l = 0;
				var n = q + w,
					r = p + x,
					m = b.ceil(s / k) - 1;
				A = q + n * (!h ? m : k - 1);
				z = p + r * (h ? m : k - 1);
				a.o(e, A);
				a.r(e, z);
				for(var f = 0; f < s; f++) {
					var C = a.sg();
					a.yg(C, f + 1);
					var i = a.qd(g, "numbertemplate", C, d);
					a.J(i, "absolute");
					var v = f % (m + 1);
					a.R(i, !h ? n * v : f % k * n);
					a.P(i, h ? r * v : b.floor(f / (m + 1)) * r);
					a.O(e, i);
					B[f] = i;
					c.Eb & 1 && a.i(i, "tap", a.Q(j, t, f));
					c.Eb & 2 && a.i(i, "mouseover", a.nc(a.Q(j, t, f), i));
					y[f] = a.ec(i)
				}
				u = d
			}
		};
		f.fc = c = a.u({
			mc: 10,
			lc: 10,
			Pb: 1,
			Eb: 1
		}, C);
		g = a.I(e, "prototype");
		q = a.o(g);
		p = a.r(g);
		a.Mb(g, e);
		o = c.bd || 1;
		k = c.rd || 1;
		w = c.mc;
		x = c.lc;
		h = c.Pb - 1;
		c.Xc == i && a.K(e, "noscale", d);
		c.db && a.K(e, "autocenter", c.db)
	};
	var s = f.$JssorArrowNavigator$ = function(b, g, h) {
			var c = this;
			m.call(c);
			var r, q, e, f, k;
			a.o(b);
			a.r(b);

			function l(a) {
				c.s(n.pc, a, d)
			}

			function p(c) {
				a.L(b, c || !h.Xb && e == 0);
				a.L(g, c || !h.Xb && e >= q - h.q);
				r = c
			}
			c.zc = function(b, a, c) {
				if(c) e = a;
				else {
					e = b;
					p(r)
				}
			};
			c.xc = p;
			var o;
			c.Ec = function(c) {
				q = c;
				e = 0;
				if(!o) {
					a.i(b, "tap", a.Q(j, l, -k));
					a.i(g, "tap", a.Q(j, l, k));
					a.ec(b);
					a.ec(g);
					o = d
				}
			};
			c.fc = f = a.u({
				bd: 1
			}, h);
			k = f.bd;
			if(f.Xc == i) {
				a.K(b, "noscale", d);
				a.K(g, "noscale", d)
			}
			if(f.db) {
				a.K(b, "autocenter", f.db);
				a.K(g, "autocenter", f.db)
			}
		},
		p = f.$JssorThumbnailNavigator$ = function(g, C) {
			var l = this,
				A, q, c, w = [],
				y, x, e, r, s, v, u, p, t, f, o;
			m.call(l);
			g = a.ub(g);

			function B(m, f) {
				var g = this,
					b, k, i;

				function p() {
					k.gd(q == f)
				}

				function h(d) {
					if(d || !t.kg()) {
						var a = e - f % e,
							b = t.yd((f + a) / e - 1),
							c = b * e + e - a;
						l.s(n.pc, c)
					}
				}
				g.rb = f;
				g.Vc = p;
				i = m.ne || m.kc || a.wb();
				g.qc = b = a.qd(o, "thumbnailtemplate", i, d);
				k = a.ec(b);
				c.Eb & 1 && a.i(b, "tap", a.Q(j, h, 0));
				c.Eb & 2 && a.i(b, "mouseover", a.nc(a.Q(j, h, 1), b))
			}
			l.zc = function(c, d, f) {
				var a = q;
				q = c;
				a != -1 && w[a].Vc();
				w[c].Vc();
				!f && t.vg(t.yd(b.floor(d / e)))
			};
			l.xc = function(b) {
				a.L(g, b)
			};
			var z;
			l.Ec = function(D, C) {
				if(!z) {
					A = D;
					b.ceil(A / e);
					q = -1;
					p = b.min(p, C.length);
					var j = c.Pb & 1,
						m = v + (v + r) * (e - 1) * (1 - j),
						l = u + (u + s) * (e - 1) * j,
						o = m + (m + r) * (p - 1) * j,
						n = l + (l + s) * (p - 1) * (1 - j);
					a.J(f, "absolute");
					a.xb(f, "hidden");
					c.db & 1 && a.R(f, (y - o) / 2);
					c.db & 2 && a.P(f, (x - n) / 2);
					a.o(f, o);
					a.r(f, n);
					var k = [];
					a.g(C, function(l, g) {
						var h = new B(l, g),
							d = h.qc,
							c = b.floor(g / e),
							i = g % e;
						a.R(d, (v + r) * i * (1 - j));
						a.P(d, (u + s) * i * j);
						if(!k[c]) {
							k[c] = a.wb();
							a.O(f, k[c])
						}
						a.O(k[c], d);
						w.push(h)
					});
					var E = a.u({
						Rc: i,
						Ad: i,
						Lg: m,
						Wg: l,
						vd: r * j + s * (1 - j),
						Od: 12,
						yc: 200,
						ud: 1,
						Jc: c.Pb,
						Ed: c.Zg || c.Yg ? 0 : c.Pb
					}, c);
					t = new h(g, E);
					z = d
				}
			};
			l.fc = c = a.u({
				mc: 0,
				lc: 0,
				q: 1,
				Pb: 1,
				db: 3,
				Eb: 1
			}, C);
			if(c.Hc != k) c.q = c.Hc;
			if(c.E != k) c.rd = c.E;
			y = a.o(g);
			x = a.r(g);
			f = a.I(g, "slides", d);
			o = a.I(f, "prototype");
			v = a.o(o);
			u = a.r(o);
			a.Mb(o, f);
			e = c.rd || 1;
			r = c.mc;
			s = c.lc;
			p = c.q;
			c.Xc == i && a.K(g, "noscale", d)
		};

	function q(e, d, c) {
		var b = this;
		l.call(b, 0, c);
		b.zb = a.cd;
		b.Sb = 0;
		b.cc = c
	}
	f.$JssorCaptionSlider$ = function(h, f, i) {
		var c = this;
		l.call(c, 0, 0);
		var e, d;

		function g(p, h, f) {
			var c = this,
				g, n = f ? h.Jg : h.Ig,
				e = h.gb,
				o = {
					jb: "t",
					D: "d",
					k: "du",
					x: "x",
					y: "y",
					B: "r",
					p: "z",
					a: "f",
					Jb: "b"
				},
				d = {
					tb: function(b, a) {
						if(!isNaN(a.Ab)) b = a.Ab;
						else b *= a.yf;
						return b
					},
					a: function(b, a) {
						return this.tb(b - 1, a)
					}
				};
			d.p = d.a;
			l.call(c, 0, 0);

			function j(r, m) {
				var l = [],
					i, k = [],
					c = [];

				function h(c, d) {
					var b = {};
					a.g(o, function(g, h) {
						var e = a.n(c, g + (d || ""));
						if(e) {
							var f = {};
							if(g == "t") f.Ab = e;
							else if(e.indexOf("%") + 1) f.yf = a.wc(e) / 100;
							else f.Ab = a.wc(e);
							b[h] = f
						}
					});
					return b
				}

				function p() {
					return e[b.floor(b.random() * e.length)]
				}

				function g(f) {
					var h;
					if(f == "*") h = p();
					else if(f) {
						var d = e[a.Tb(f)] || e[f];
						if(a.sc(d)) {
							if(f != i) {
								i = f;
								c[f] = 0;
								k[f] = d[b.floor(b.random() * d.length)]
							} else c[f]++;
							d = k[f];
							if(a.sc(d)) {
								d = d.length && d[c[f] % d.length];
								if(a.sc(d)) d = d[b.floor(b.random() * d.length)]
							}
						}
						h = d;
						if(a.Bd(h)) h = g(h)
					}
					return h
				}
				var q = a.ab(r);
				a.g(q, function(b) {
					var c = [];
					c.S = b;
					var e = a.n(b, "u") == "caption";
					a.g(f ? [0, 3] : [2], function(l, o) {
						if(e) {
							var k, f;
							if(l != 2 || !a.n(b, "t3")) {
								f = h(b, l);
								if(l == 2 && !f.jb) {
									f.D = f.D || {
										Ab: 0
									};
									f = a.u(h(b, 0), f)
								}
							}
							if(f && f.jb) {
								k = g(f.jb.Ab);
								if(k) {
									var i = a.u({
										D: 0
									}, k);
									a.g(f, function(c, a) {
										var b = (d[a] || d.tb).apply(d, [i[a], f[a]]);
										if(!isNaN(b)) i[a] = b
									});
									if(!o)
										if(f.Jb) i.Jb = f.Jb.Ab || 0;
										else if(n & 2) i.Jb = 0
								}
							}
							c.push(i)
						}
						if(m % 2 && !o) c.ab = j(b, m + 1)
					});
					l.push(c)
				});
				return l
			}

			function m(w, c, z) {
				var g = {
						j: c.j,
						ic: c.ic,
						C: c.C,
						Ic: f && !z
					},
					m = w,
					r = a.kd(w),
					k = a.o(m),
					j = a.r(m),
					y = a.o(r),
					x = a.r(r),
					h = {},
					e = {},
					i = c.Me || 1;
				if(c.a) e.a = 1 - c.a;
				g.ob = k;
				g.nb = j;
				if(c.p || c.B) {
					e.p = (c.p || 2) - 2;
					if(a.kb() || a.Cc()) e.p = b.min(e.p, 1);
					h.p = 1;
					var B = c.B || 0;
					e.B = B * 360;
					h.B = 0
				} else if(c.c) {
					var s = {
							f: 0,
							v: k,
							z: j,
							e: 0
						},
						v = a.u({}, s),
						d = v.Ib = {},
						u = c.c & 4,
						p = c.c & 8,
						t = c.c & 1,
						q = c.c & 2;
					if(u && p) {
						d.f = j / 2 * i;
						d.z = -d.f
					} else if(u) d.z = -j * i;
					else if(p) d.f = j * i;
					if(t && q) {
						d.e = k / 2 * i;
						d.v = -d.e
					} else if(t) d.v = -k * i;
					else if(q) d.e = k * i;
					g.mb = c.mb;
					e.c = v;
					h.c = s
				}
				var n = 0,
					o = 0;
				if(c.x) n -= y * c.x;
				if(c.y) o -= x * c.y;
				if(n || o || g.mb) {
					e.e = n;
					e.f = o
				}
				var A = c.k;
				h = a.u(h, a.ue(m, e));
				g.Sc = a.ld();
				return new l(c.D, A, g, m, h, e)
			}

			function i(b, d) {
				a.g(d, function(d) {
					var a, h = d.S,
						f = d[0],
						j = d[1];
					if(f) {
						a = m(h, f);
						f.Jb == k && a.Y(b);
						b = a.ib()
					}
					b = i(b, d.ab);
					if(j) {
						var e = m(h, j, 1);
						e.Y(b);
						c.M(e);
						g.M(e)
					}
					a && c.M(a)
				});
				return b
			}
			c.zb = function() {
				c.F(c.ib() * (f || 0));
				g.F(0)
			};
			g = new l(0, 0);
			i(0, n ? j(p, 1) : [])
		}
		c.zb = function() {
			d.zb();
			e.zb()
		};
		e = new g(h, f, 1);
		c.Sb = e.ib();
		c.cc = c.Sb + i;
		d = new g(h, f);
		d.Y(c.cc);
		c.M(d);
		c.M(e)
	};
	f.$JssorCaptionSlideo$ = function(n, g, m) {
		var b = this,
			o, h = {},
			i = g.gb,
			e = new l(0, 0);
		l.call(b, 0, 0);

		function j(d, c) {
			var b = {};
			a.g(d, function(d, f) {
				var e = h[f];
				if(e) {
					if(a.wg(d)) d = j(d, c || f == "e");
					else if(c)
						if(a.dc(d)) d = o[d];
					b[e] = d
				}
			});
			return b
		}

		function k(e, c) {
			var b = [],
				d = a.ab(e);
			a.g(d, function(d) {
				var h = a.n(d, "u") == "caption";
				if(h) {
					var e = a.n(d, "t"),
						g = i[a.Tb(e)] || i[e],
						f = {
							S: d,
							jb: g
						};
					b.push(f)
				}
				if(c < 5) b = b.concat(k(d, c + 1))
			});
			return b
		}

		function r(c, d, b) {
			a.g(d, function(f) {
				var d = j(f),
					h = {
						j: a.vc(d.j),
						Sc: a.ld(),
						ob: b.T,
						nb: b.U
					},
					g = new l(f.b, f.d, h, c, b, d);
				e.M(g);
				b = a.re(b, d)
			});
			return b
		}

		function q(b) {
			a.g(b, function(c) {
				var b = c.S,
					e = a.o(b),
					d = a.r(b),
					f = {
						e: a.R(b),
						f: a.P(b),
						a: 1,
						V: a.N(b) || 0,
						B: 0,
						Db: 0,
						Fb: 0,
						vb: 1,
						yb: 1,
						Qb: 0,
						Ub: 0,
						ac: 0,
						gc: 0,
						bc: 0,
						T: e,
						U: d,
						c: {
							f: 0,
							v: e,
							z: d,
							e: 0
						}
					};
				r(b, c.jb, f)
			})
		}

		function t(g, f, h) {
			var c = g.b - f;
			if(c) {
				var a = new l(f, c);
				a.M(e, d);
				a.Y(h);
				b.M(a)
			}
			b.Ge(g.d);
			return c
		}

		function s(f) {
			var c = e.Fc(),
				d = 0;
			a.g(f, function(e, f) {
				e = a.u({
					d: m
				}, e);
				t(e, c, d);
				c = e.b;
				d += e.d;
				if(!f || e.t == 2) {
					b.Sb = c;
					b.cc = c + e.d
				}
			})
		}
		b.zb = function() {
			b.F(-1, d)
		};
		o = [c.vf, c.l, c.df, c.Pe, c.Qe, c.m, c.Kc, c.Re, c.Se, c.Te, c.Ue, c.Ve, c.We, c.Xe, c.Ye, c.Ze, c.af, c.bf, c.cf, c.ef, c.uf, c.ff, c.gf, c.hf, c.jf, c.kf, c.lf, c.mf, c.nf, c.of, c.pf, c.qf, c.rf, c.sf, c.tf, c.fg, c.eg];
		var u = {
			f: "y",
			e: "x",
			z: "m",
			v: "t",
			B: "r",
			Db: "rX",
			Fb: "rY",
			vb: "sX",
			yb: "sY",
			Qb: "tX",
			Ub: "tY",
			ac: "tZ",
			gc: "kX",
			bc: "kY",
			a: "o",
			j: "e",
			V: "i",
			c: "c"
		};
		a.g(u, function(b, a) {
			h[b] = a
		});
		q(k(n, 1));
		e.F(-1);
		var p = g.fh || [],
			f = [].concat(p[a.Tb(a.n(n, "b"))] || []);
		f.push({
			b: e.ib(),
			d: f.length ? 0 : m
		});
		s(f);
		b.F(-1)
	};
	jssor_1_slider_init = function() {
		var i = [{
				k: 1200,
				x: .3,
				C: {
					e: [.3, .7]
				},
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: -.3,
				A: d,
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: -.3,
				C: {
					e: [.3, .7]
				},
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				A: d,
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				C: {
					f: [.3, .7]
				},
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: -.3,
				A: d,
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: -.3,
				C: {
					f: [.3, .7]
				},
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				A: d,
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				q: 2,
				C: {
					e: [.3, .7]
				},
				G: {
					bb: 3
				},
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				q: 2,
				A: d,
				G: {
					bb: 3
				},
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				E: 2,
				C: {
					f: [.3, .7]
				},
				G: {
					pb: 12
				},
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				E: 2,
				A: d,
				G: {
					pb: 12
				},
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: .3,
				q: 2,
				C: {
					f: [.3, .7]
				},
				G: {
					bb: 12
				},
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				y: -.3,
				q: 2,
				A: d,
				G: {
					bb: 12
				},
				j: {
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				E: 2,
				C: {
					e: [.3, .7]
				},
				G: {
					pb: 3
				},
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: -.3,
				E: 2,
				A: d,
				G: {
					pb: 3
				},
				j: {
					e: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				y: .3,
				q: 2,
				E: 2,
				C: {
					e: [.3, .7],
					f: [.3, .7]
				},
				G: {
					bb: 3,
					pb: 12
				},
				j: {
					e: c.m,
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				x: .3,
				y: .3,
				q: 2,
				E: 2,
				C: {
					e: [.3, .7],
					f: [.3, .7]
				},
				A: d,
				G: {
					bb: 3,
					pb: 12
				},
				j: {
					e: c.m,
					f: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				D: 20,
				c: 3,
				j: {
					c: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				D: 20,
				c: 3,
				A: d,
				j: {
					c: c.Kc,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				D: 20,
				c: 12,
				j: {
					c: c.m,
					a: c.l
				},
				a: 2
			}, {
				k: 1200,
				D: 20,
				c: 12,
				A: d,
				j: {
					c: c.Kc,
					a: c.l
				},
				a: 2
			}],
			j = {
				Rc: d,
				Bg: {
					Z: r,
					gb: i,
					Ud: 1
				},
				Gg: {
					Z: s
				},
				Fg: {
					Z: p,
					q: 10,
					mc: 8,
					lc: 8,
					Nc: 360
				}
			},
			g = new h("jssor_1", j);

		function e() {
			var a = g.S.parentNode.clientWidth;
			if(a) {
				a = b.min(a, 800);
				g.Cg(a)
			} else f.setTimeout(e, 30)
		}
		e();
		a.i(f, "load", e);
		a.i(f, "resize", a.tg(f, e));
		a.i(f, "orientationchange", e)
	}
}(window, document, Math, null, true, false)