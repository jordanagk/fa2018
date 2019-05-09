(function () {
    var t;
    t = "undefined" != typeof exports && null !== exports ? exports : this, t.Lethargy = function () {
        function t(t, s, i, l) {
            this.stability = null != t ? Math.abs(t) : 8, this.sensitivity = null != s ? 1 + Math.abs(s) : 100, this.tolerance = null != i ? 1 + Math.abs(i) : 1.1, this.delay = null != l ? l : 150, this.lastUpDeltas = function () {
                var t, s, i;
                for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) i.push(null);
                return i
            }.call(this), this.lastDownDeltas = function () {
                var t, s, i;
                for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) i.push(null);
                return i
            }.call(this), this.deltasTimestamp = function () {
                var t, s, i;
                for (i = [], t = 1, s = 2 * this.stability; s >= 1 ? s >= t : t >= s; s >= 1 ? t++ : t--) i.push(null);
                return i
            }.call(this)
        }
        return t.prototype.check = function (t) {
            var s;
            return t = t.originalEvent || t, null != t.wheelDelta ? s = t.wheelDelta : null != t.deltaY ? s = -40 * t.deltaY : (null != t.detail || 0 === t.detail) && (s = -40 * t.detail), this.deltasTimestamp.push(Date.now()), this.deltasTimestamp.shift(), s > 0 ? (this.lastUpDeltas.push(s), this.lastUpDeltas.shift(), this.isInertia(1)) : (this.lastDownDeltas.push(s), this.lastDownDeltas.shift(), this.isInertia(-1))
        }, t.prototype.isInertia = function (t) {
            var s, i, l, a, e, n, h;
            return s = -1 === t ? this.lastDownDeltas : this.lastUpDeltas, null === s[0] ? t : this.deltasTimestamp[2 * this.stability - 2] + this.delay > Date.now() && s[0] === s[2 * this.stability - 1] ? !1 : (l = s.slice(0, this.stability), i = s.slice(this.stability, 2 * this.stability), h = l.reduce(function (t, s) {
                return t + s
            }), e = i.reduce(function (t, s) {
                return t + s
            }), n = h / l.length, a = e / i.length, Math.abs(n) < Math.abs(a * this.tolerance) && this.sensitivity < Math.abs(a) ? t : !1)
        }, t.prototype.showLastUpDeltas = function () {
            return this.lastUpDeltas
        }, t.prototype.showLastDownDeltas = function () {
            return this.lastDownDeltas
        }, t
    }()
}).call(this);
