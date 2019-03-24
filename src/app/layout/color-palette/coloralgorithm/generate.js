import chroma from 'chroma-js';
import * as bezierFn from './curves.js';
export function generate(specs) {
  var t = specs;

  function generateNumberOfSteps(curve, steps) {
    var array = []
    for (var step in Array.from(Array(steps).keys())) {
      const value = curve(step / (steps - 1))
      array.push(value)
    }
    array.reverse()
    return array
  }
  var a = generateNumberOfSteps(bezierFn[t.lum_curve], t.steps);
  var o = generateNumberOfSteps(bezierFn[t.sat_curve], t.steps);
  var i = generateNumberOfSteps(bezierFn[t.hue_curve], t.steps);
  var u = [];
  var l = [];
  var s = [];
  for (var c in a) {
    var f = a[c];
    u.push(distribute(f, [0, 1], [.01 * t.lum_end, .01 * t.lum_start], true))
  }
  for (var c in o) {
    var p = o[c];
    var h = distribute(p, [0, 1], [.01 * t.sat_start, .01 * t.sat_end], true);
    h *= .01 * t.sat_rate;
    l.push(h)
  }
  for (var c in i) {
    var d = i[c];
    s.push(distribute(d, [0, 1], [t.hue_start, t.hue_end]))
  }
  l.reverse();
  o.reverse();
  s.reverse();
  i.reverse();
  var v = {
    hue: s,
    hue_steps: i,
    sat: l,
    sat_steps: o,
    lum: u,
    lum_steps: a
  };
  var b = [];
  v.hue.map(function(e, t) {
    var r = {
      hue: v.hue[t],
      hueStep: v.hue_steps[t],
      sat: v.sat[t],
      satStep: v.sat_steps[t],
      lum: v.lum[t],
      lumStep: v.lum_steps[t],
      major: true,
      step: 10 * t
    };
    b.push(r)
  });
  t.minor_steps_map.map(function(e, r) {
    if (false == isNaN(e)) {
      var n = {};
      var a = void 0;
      var o = {};
      b.map(function(t, r) {
        if (e == t.step) {
          a = r + 1;
          n = t;
          o = b[r + 1]
        }
      });
      var i = (n.hueStep + o.hueStep) / 2;
      var u = distribute(i, [0, 1], [t.hue_start, t.hue_end], true);
      var l = (n.satStep + o.satStep) / 2;
      var s = distribute(l, [0, 1], [.01 * t.sat_start, .01 * t.sat_end], true) * (.01 * t.sat_rate);
      var c = (n.lumStep + o.lumStep) / 2;
      var f = distribute(c, [0, 1], [.01 * t.lum_end, .01 * t.lum_start], true);
      if (void 0 != a) {
        var p = {
          hue: u,
          hueStep: i,
          sat: s,
          satStep: l,
          lum: f,
          lumStep: c,
          major: false,
          step: (n.step + o.step) / 2
        };
        b.splice(a, 0, p)
      }
    }
  });
  var m = se(t, b);
  t.lock_hex && (m = ce(t, m, t.lock_hex));
  return m
};
export function distribute(value, rangeA, rangeB) {
  const [fromLow, fromHigh] = Array.from(rangeA)
  const [toLow, toHigh] = Array.from(rangeB)
  const result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow));
  if (toLow < toHigh) {
    if (result < toLow) {
      return toLow
    }
    if (result > toHigh) {
      return toHigh
    }
  } else {
    if (result > toLow) {
      return toLow
    }
    if (result < toHigh) {
      return toHigh
    }
  }
  return result;
}

function ce(e, t, r) {
  var n = [];
  var a = e.lock_hex;
  var o = chroma(a).hsv();
  isNaN(o[0]) && (o[0] = 0);
  var i = {
    hue: o[0],
    sat: o[1],
    lum: o[2]
  };
  var u = 999999;
  var l = "";
  var s = true;
  var c = false;
  var f = void 0;
  try {
    for (var p = t[Symbol.iterator](), h; !(s = (h = p.next()).done); s = true) {
      var d = h.value;
      var v = chroma.deltaE(d.hex, a);
      if (u > v) {
        u = v;
        l = d
      }
    }
  } catch (e) {
    c = true;
    f = e
  } finally {
    try {
      !s && p.return && p.return()
    } finally {
      if (c) throw f
    }
  }
  var b = t.indexOf(l);
  var m = [];
  var g = {
    hue: i.hue - l.hue,
    sat: i.sat - l.sat,
    lum: i.lum - l.lum
  };
  for (var y in t) {
    var _ = {};
    if (y < b) {
      var w = {
        hue: distribute(y, [0, b], [0, g.hue]),
        sat: distribute(y, [0, b], [0, g.sat]),
        lum: distribute(y, [0, b], [0, g.lum])
      };
      _.hue = t[y].hue + w.hue;
      _.sat = t[y].sat + w.sat;
      _.lum = t[y].lum + w.lum
    }
    if (y == b) {
      _.hue = i.hue;
      _.sat = i.sat;
      _.lum = i.lum
    }
    if (y > b) {
      var O = {
        hue: distribute(y, [b, t.length - 1], [g.hue, 0]),
        sat: distribute(y, [b, t.length - 1], [g.sat, 0]),
        lum: distribute(y, [b, t.length - 1], [g.lum, 0])
      };
      _.hue = t[y].hue + O.hue;
      _.sat = t[y].sat + O.sat;
      _.lum = t[y].lum + O.lum
    }
    _.step = t[y].label;
    m.push(_)
  }
  return se(e, m)
}

function se(e, t) {
  var r = [];
  var n = 0;
  t.map(function(t, n) {
    var a = {
      hue: t.hue,
      sat: t.sat,
      lum: t.lum
    };
    a.sat > 1 && (a.sat = 1);
    var o = chroma.hsv([a.hue, a.sat, a.lum]);
    var i = chroma.hsv([a.hue, a.sat, a.lum]).rgb();
    var u = chroma.contrast(o, "white").toFixed(2);
    var l = chroma.contrast(o, "black").toFixed(2);
    var s = "";
    s = u >= 4.5 ? "white" : "black";
    s = u >= 4.5 ? "white" : "black";
    var c = false;
    e.lock_hex.toUpperCase() == chroma(o).hex().toUpperCase() && (c = true);
    "#" + e.lock_hex.toUpperCase() == chroma(o).hex().toUpperCase() && (c = true);
    var f = {
      hex: chroma(o).hex(),
      hue: chroma(o).hsv()[0],
      sat: chroma(o).hsv()[1],
      lum: chroma(o).hsv()[2],
      hsv: chroma(o).hsv(),
      hsl: chroma(o).hsl(),
      rgb: chroma(o).rgb(),
      hueRange: [e.hue_start, e.hue_end],
      steps: e.steps,
      label: t.step,
      contrastBlack: l,
      contrastWhite: u,
      displayColor: s,
      lock: c
    };
    isNaN(f.hue) && (f.hue = 0);
    isNaN(f.hsv[0]) && (f.hsv[0] = 0);
    isNaN(f.hsl[0]) && (f.hsl[0] = 0);
    r.push(f)
  });
  return r
}
