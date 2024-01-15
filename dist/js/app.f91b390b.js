(function () {
  "use strict";
  var e = {
      3031: function (e, n, t) {
        var a = t(9242),
          i = t(3396);
        const o = { id: "app" };
        function s(e, n, t, a, s, r) {
          const c = (0, i.up)("NavBar"),
            l = (0, i.up)("router-view");
          return (0, i.wg)(), (0, i.iD)("div", o, [(0, i.Wm)(c), (0, i.Wm)(l)]);
        }
        const r = { class: "navbar" },
          c = { class: "nav-list" },
          l = { class: "nav-item" };
        function p(e, n, t, a, o, s) {
          const p = (0, i.up)("router-link");
          return (
            (0, i.wg)(),
            (0, i.iD)("nav", r, [
              (0, i._)("ul", c, [
                (0, i._)("li", l, [
                  (0, i.Wm)(
                    p,
                    { to: "/", class: "nav-link" },
                    { default: (0, i.w5)(() => [(0, i.Uk)("Home")]), _: 1 }
                  ),
                  (0, i.Wm)(
                    p,
                    { to: "/about", class: "nav-link" },
                    { default: (0, i.w5)(() => [(0, i.Uk)("About Me")]), _: 1 }
                  ),
                  (0, i.Wm)(
                    p,
                    { to: "/resume", class: "nav-link" },
                    { default: (0, i.w5)(() => [(0, i.Uk)("Resume")]), _: 1 }
                  ),
                  (0, i.Wm)(
                    p,
                    { to: "/gallery", class: "nav-link" },
                    { default: (0, i.w5)(() => [(0, i.Uk)("Gallery")]), _: 1 }
                  ),
                  (0, i.Wm)(
                    p,
                    { to: "/contact", class: "nav-link" },
                    {
                      default: (0, i.w5)(() => [(0, i.Uk)("Contact Me")]),
                      _: 1,
                    }
                  ),
                ]),
              ]),
            ])
          );
        }
        var h = { name: "NavBar" },
          u = t(89);
        const m = (0, u.Z)(h, [["render", p]]);
        var d = m,
          g = { name: "App", components: { NavBar: d } };
        const f = (0, u.Z)(g, [["render", s]]);
        var v = f,
          b = t(2483),
          y = t.p + "img/profile-pic.e64353f4.jpeg";
        const w = { class: "home-container" },
          k = (0, i._)(
            "div",
            { class: "title-section" },
            [
              (0, i._)("div", { class: "profile-picture-container" }, [
                (0, i._)("img", {
                  src: y,
                  alt: "Tan Ping Cheun",
                  class: "profile-picture",
                }),
                (0, i._)("h1", null, "Tan Ping Cheun Personal Website"),
              ]),
            ],
            -1
          ),
          P = { class: "content-section" },
          _ = { class: "photo-gallery" },
          D = ["src"],
          j = { class: "gallery-controls" },
          T = (0, i._)(
            "div",
            { class: "designation" },
            [
              (0, i._)("h2", null, "Tan Ping Cheun"),
              (0, i._)("h3", null, "Penangite 01"),
              (0, i._)(
                "p",
                null,
                " UTAR Student with Bachelor Degree of Information Systems (Hons) Business Information Systems from Penang. Birthdate 2001-03-08 and MBTI ENFJ-A. "
              ),
            ],
            -1
          );
        function x(e, n, t, o, s, r) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", w, [
              k,
              (0, i._)("div", P, [
                (0, i._)("div", _, [
                  (0, i.Wm)(
                    a.uT,
                    { name: "fade", mode: "out-in" },
                    {
                      default: (0, i.w5)(() => [
                        ((0, i.wg)(),
                        (0, i.iD)(
                          "img",
                          {
                            src: r.currentPhoto,
                            key: s.photoKey,
                            alt: "Photo of Tan Ping Cheun",
                          },
                          null,
                          8,
                          D
                        )),
                      ]),
                      _: 1,
                    }
                  ),
                  (0, i._)("div", j, [
                    (0, i._)(
                      "button",
                      {
                        onClick:
                          n[0] ||
                          (n[0] = (...e) =>
                            r.previousPhoto && r.previousPhoto(...e)),
                      },
                      "Previous"
                    ),
                    (0, i._)(
                      "button",
                      {
                        onClick:
                          n[1] ||
                          (n[1] = (...e) => r.nextPhoto && r.nextPhoto(...e)),
                      },
                      "Next"
                    ),
                  ]),
                ]),
                T,
              ]),
            ])
          );
        }
        var A = {
          name: "Home",
          data() {
            return {
              photos: [
                "image/personal-pic4.jpg",
                "image/personal-pic5.jpg",
                "image/personal-pic6.jpg",
                "image/personal-pic7.jpg",
                "image/personal-pic8.jpg",
                "image/personal-pic9.jpg",
                "image/personal-pic10.jpg",
                "image/personal-pic11.jpg",
                "image/personal-pic12.jpg",
              ],
              currentPhotoIndex: 0,
              photoKey: 0,
            };
          },
          computed: {
            currentPhoto() {
              return this.photos[this.currentPhotoIndex];
            },
          },
          methods: {
            nextPhoto() {
              (this.currentPhotoIndex =
                (this.currentPhotoIndex + 1) % this.photos.length),
                this.photoKey++;
            },
            previousPhoto() {
              (this.currentPhotoIndex =
                (this.currentPhotoIndex + this.photos.length - 1) %
                this.photos.length),
                this.photoKey--;
            },
          },
          mounted() {
            setInterval(() => {
              this.nextPhoto();
            }, 3e3);
          },
        };
        const C = (0, u.Z)(A, [["render", x]]);
        var S = C;
        const I = { class: "about-page" },
          M = (0, i.uE)(
            '<aside class="sidebar"><img src="' +
              y +
              '" alt="Profile" class="profile-image"><nav class="sidebar-nav"><a href="#about-section">About</a><a href="#experience-section">Work Experience(s)</a><a href="#education-section">Education(s)</a><a href="#project-section">Project(s)</a><a href="#skill-section">Skill(s)</a><a href="#cert-section">Cert(s)</a></nav></aside><div class="main-content"><section id="about-section" class="content-section-about"><h1 class="section-heading">About</h1><p> Recently UTAR graduate soon with a Bachelor Degree of Information Systems (Hons) Business Information Systems and TARUMT graduate with a Diploma of Internet Technology, seeking a challenging entry-level position in IT related job. Proficient in Python, Java, React Native, Tableau, R, C programming and ASP.NET. Have a strong communication, teamwork and problem-solving skills. Eager to leverage my knowledge and academic foundation to contribute to a dynamic team environment. </p></section><section id="experience-section" class="content-section-about"><h1 class="section-heading">Work Experience(s)</h1><div class="experience-details"><h2>TBS Solution Sdn Bhd</h2><p>October 2020 - January 2021</p><p> As a software tester, I need to run and test the vehicle exam automation system in physically and run though many times to find out the errors and bugs. </p><h2>Dynamike Enterprise</h2><p>October 2022 - January 2023</p><p> Based on the customer requirement to modified the system to satisfy the their needs. The language use in front-end site are Vue.js, back-end site is Java, database using is pgAdmin. </p></div></section><section id="education-section" class="education-section"><h1 class="section-heading" id="education-section-heading"> Education(s) </h1><div class="education-card"><h2>TARUMT</h2><p>Penang, Malaysia</p><p><strong>Degree:</strong> Diploma in Internet Technology</p><p><strong>CGPA:</strong> 3.6/4.0</p><h3>Relevant Courseworks:</h3><ul><li>Database Development and Application</li><li>Object Oriented Programming Techniques</li><li>System Analysis and Design</li><li>Web Systems and Technologies</li><li>Web Application Programming</li></ul></div><div class="education-card"><h2>UTAR</h2><p>Kampar, Perak</p><p><strong>Degree:</strong> Bachelor of Information Systems (Hons) Business Information Systems </p><p><strong>CGPA:</strong> 3.4/4.0</p><h3>Relevant Courseworks:</h3><ul><li>Mobile Application and Development</li><li>Data Mining Techniques</li><li>Information Technology Project Management</li><li>Mini Project (React Native)</li><li>Business Systems</li></ul></div></section><section id="project-section" class="content-section-about"><h1 class="section-heading">Project(s)</h1><div class="experience-details"><h3>- UTAR Campus Mobile App</h3><h3>- Taxi Fare Price Prediction</h3><h3>- Hospital Management System</h3><h3>- Personal Management Application (My Diary Function)</h3></div></section><section id="skill-section" class="content-section-about"><h1 class="section-heading">Skill(s)</h1><div class="experience-details"><h3>- Language (Python, Java, C, ASP.NET C#, Php)</h3><h3> - Web and Application Development (React Native, Vue.js, JavaScript, Android) </h3><h3>- Database Management (SQL, PostgreSQL, MongoDB)</h3><h3>- Data Analysis (Tableau, R, Google Sheet)</h3><h3>- Data Mining Technique (using Python)</h3><h3>- Communication with English, Mandarin, Malay</h3><h3>- Teamwork</h3><h3>- Problem Solving</h3><h3>- Attention to details</h3></div></section><section id="cert-section" class="content-section-about"><h1 class="section-heading">Cert(s)</h1><div class="experience-details"><h3>- Google Data Analytics Specialization</h3></div></section></div>',
            2
          ),
          R = [M];
        function N(e, n, t, a, o, s) {
          return (0, i.wg)(), (0, i.iD)("div", I, R);
        }
        var B = { name: "About" };
        const O = (0, u.Z)(B, [["render", N]]);
        var W = O;
        const E = { class: "resume-page" },
          U = { class: "resume-content" },
          H = (0, i._)("h1", { class: "resume-title" }, "Resume", -1),
          G = (0, i._)(
            "p",
            { class: "resume-intro" },
            " Discover my professional background and skill set. Click to get my detailed resume. ",
            -1
          ),
          J = (0, i._)("span", { class: "btn-text" }, "Download", -1),
          Z = (0, i._)(
            "span",
            { class: "btn-icon" },
            [(0, i._)("i", { class: "fas fa-file-download" })],
            -1
          ),
          q = [J, Z];
        function K(e, n, t, a, o, s) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", E, [
              (0, i._)("div", U, [
                H,
                G,
                (0, i._)(
                  "button",
                  {
                    onClick:
                      n[0] ||
                      (n[0] = (...e) =>
                        s.downloadResume && s.downloadResume(...e)),
                    class: "resume-download-btn",
                  },
                  q
                ),
              ]),
            ])
          );
        }
        var V = {
          name: "Resume",
          methods: {
            downloadResume() {
              const e = "Resume-Tan-Ping-Cheun.pdf";
              window.location.href = e;
            },
          },
        };
        const F = (0, u.Z)(V, [["render", K]]);
        var L = F;
        const Q = { class: "gallery-container" },
          Y = (0, i._)(
            "h1",
            { style: { "margin-top": "4rem", "margin-bottom": "2rem" } },
            "My Gallery",
            -1
          ),
          z = { class: "gallery-grid" },
          X = ["src", "alt"];
        function $(e, n, t, a, o, s) {
          return (
            (0, i.wg)(),
            (0, i.iD)("div", Q, [
              Y,
              (0, i._)("div", z, [
                ((0, i.wg)(!0),
                (0, i.iD)(
                  i.HY,
                  null,
                  (0, i.Ko)(
                    o.images,
                    (e, n) => (
                      (0, i.wg)(),
                      (0, i.iD)("div", { key: n, class: "gallery-item" }, [
                        (0, i._)(
                          "img",
                          { src: e.src, alt: e.alt, class: "gallery-image" },
                          null,
                          8,
                          X
                        ),
                      ])
                    )
                  ),
                  128
                )),
              ]),
            ])
          );
        }
        var ee = {
          name: "Gallery",
          data() {
            let e = [
              {
                src: "image/personal-pic1.jpg",
                alt: "Description of image 1",
              },
              {
                src: "image/personal-pic2.jpg",
                alt: "Description of image 2",
              },
              {
                src: "image/personal-pic3.jpg",
                alt: "Description of image 3",
              },
              {
                src: "image/personal-pic4.jpg",
                alt: "Description of image 4",
              },
              {
                src: "image/personal-pic5.jpg",
                alt: "Description of image 5",
              },
              {
                src: "image/personal-pic6.jpg",
                alt: "Description of image 6",
              },
              {
                src: "image/personal-pic7.jpg",
                alt: "Description of image 7",
              },
              {
                src: "image/personal-pic8.jpg",
                alt: "Description of image 8",
              },
              {
                src: "image/personal-pic9.jpg",
                alt: "Description of image 9",
              },
              {
                src: "image/personal-pic10.jpg",
                alt: "Description of image 10",
              },
              {
                src: "image/personal-pic11.jpg",
                alt: "Description of image 11",
              },
              {
                src: "image/personal-pic12.jpg",
                alt: "Description of image 12",
              },
            ].sort((e, n) => {
              let t = parseInt(e.src.match(/\d+/)[0]),
                a = parseInt(n.src.match(/\d+/)[0]);
              return a - t;
            });
            return { images: e };
          },
        };
        const ne = (0, u.Z)(ee, [["render", $]]);
        var te = ne;
        const ae = (e) => (
            (0, i.dD)("data-v-63b98708"), (e = e()), (0, i.Cn)(), e
          ),
          ie = ae(() =>
            (0, i._)(
              "head",
              null,
              [
                (0, i._)("link", {
                  href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",
                  rel: "stylesheet",
                }),
              ],
              -1
            )
          ),
          oe = { class: "contact-page" },
          se = ae(() =>
            (0, i._)("h1", { class: "contact-heading" }, "Contact Me", -1)
          ),
          re = { class: "contact-icons" },
          ce = (0, i.uE)(
            '<a href="https://www.linkedin.com/in/tan-ping-cheun-0a88ba148/" target="_blank" class="icon-link" data-v-63b98708><i class="fab fa-linkedin" data-v-63b98708></i></a><a href="https://github.com/pctan9491" target="_blank" class="icon-link" data-v-63b98708><i class="fab fa-github" data-v-63b98708></i></a><a href="https://www.instagram.com/pctan9491/" target="_blank" class="icon-link" data-v-63b98708><i class="fab fa-instagram" data-v-63b98708></i></a><a href="https://www.facebook.com/profile.php?id=100007523895074" target="_blank" class="icon-link facebook" data-v-63b98708><i class="fab fa-facebook-square" data-v-63b98708></i></a><a href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=pctan9491@gmail.com" target="_blank" class="icon-link email" data-v-63b98708><i class="fas fa-envelope" data-v-63b98708></i></a>',
            5
          ),
          le = ae(() => (0, i._)("i", { class: "fas fa-phone" }, null, -1)),
          pe = { key: 0, class: "phone-number-box" };
        function he(e, n, t, a, o, s) {
          return (
            (0, i.wg)(),
            (0, i.iD)(
              i.HY,
              null,
              [
                ie,
                (0, i._)("div", oe, [
                  se,
                  (0, i._)("div", re, [
                    ce,
                    (0, i._)(
                      "a",
                      {
                        href: "javascript:void(0)",
                        onClick:
                          n[0] ||
                          (n[0] = (...e) =>
                            s.showPhoneNumber && s.showPhoneNumber(...e)),
                        class: "icon-link phone",
                      },
                      [
                        le,
                        o.phoneNumberVisible
                          ? ((0, i.wg)(),
                            (0, i.iD)("div", pe, " +60199130949 "))
                          : (0, i.kq)("", !0),
                      ]
                    ),
                  ]),
                ]),
              ],
              64
            )
          );
        }
        var ue = {
          name: "Contact",
          data() {
            return { phoneNumberVisible: !1 };
          },
          methods: {
            showPhoneNumber() {
              this.phoneNumberVisible = !this.phoneNumberVisible;
            },
          },
        };
        const me = (0, u.Z)(ue, [
          ["render", he],
          ["__scopeId", "data-v-63b98708"],
        ]);
        var de = me;
        const ge = (0, b.p7)({
            history: (0, b.PO)("/tpc-website/"),
            routes: [
              { path: "/", component: S },
              { path: "/about", component: W },
              { path: "/resume", component: L },
              { path: "/gallery", component: te },
              { path: "/contact", component: de },
            ],
          }),
          fe = (0, a.ri)(v);
        fe.use(ge), fe.mount("#app");
      },
    },
    n = {};
  function t(a) {
    var i = n[a];
    if (void 0 !== i) return i.exports;
    var o = (n[a] = { exports: {} });
    return e[a].call(o.exports, o, o.exports, t), o.exports;
  }
  (t.m = e),
    (function () {
      var e = [];
      t.O = function (n, a, i, o) {
        if (!a) {
          var s = 1 / 0;
          for (p = 0; p < e.length; p++) {
            (a = e[p][0]), (i = e[p][1]), (o = e[p][2]);
            for (var r = !0, c = 0; c < a.length; c++)
              (!1 & o || s >= o) &&
              Object.keys(t.O).every(function (e) {
                return t.O[e](a[c]);
              })
                ? a.splice(c--, 1)
                : ((r = !1), o < s && (s = o));
            if (r) {
              e.splice(p--, 1);
              var l = i();
              void 0 !== l && (n = l);
            }
          }
          return n;
        }
        o = o || 0;
        for (var p = e.length; p > 0 && e[p - 1][2] > o; p--) e[p] = e[p - 1];
        e[p] = [a, i, o];
      };
    })(),
    (function () {
      t.n = function (e) {
        var n =
          e && e.__esModule
            ? function () {
                return e["default"];
              }
            : function () {
                return e;
              };
        return t.d(n, { a: n }), n;
      };
    })(),
    (function () {
      t.d = function (e, n) {
        for (var a in n)
          t.o(n, a) &&
            !t.o(e, a) &&
            Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
      };
    })(),
    (function () {
      t.g = (function () {
        if ("object" === typeof globalThis) return globalThis;
        try {
          return this || new Function("return this")();
        } catch (e) {
          if ("object" === typeof window) return window;
        }
      })();
    })(),
    (function () {
      t.o = function (e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
      };
    })(),
    (function () {
      t.p = "/tpc-website/";
    })(),
    (function () {
      var e = { 143: 0 };
      t.O.j = function (n) {
        return 0 === e[n];
      };
      var n = function (n, a) {
          var i,
            o,
            s = a[0],
            r = a[1],
            c = a[2],
            l = 0;
          if (
            s.some(function (n) {
              return 0 !== e[n];
            })
          ) {
            for (i in r) t.o(r, i) && (t.m[i] = r[i]);
            if (c) var p = c(t);
          }
          for (n && n(a); l < s.length; l++)
            (o = s[l]), t.o(e, o) && e[o] && e[o][0](), (e[o] = 0);
          return t.O(p);
        },
        a = (self["webpackChunktpc_website"] =
          self["webpackChunktpc_website"] || []);
      a.forEach(n.bind(null, 0)), (a.push = n.bind(null, a.push.bind(a)));
    })();
  var a = t.O(void 0, [998], function () {
    return t(3031);
  });
  a = t.O(a);
})();
//# sourceMappingURL=app.f91b390b.js.map
