
function zero() {
	return 0
}

function one() {
	return 1
}

function linear( k ) {
	return k
}

function smooth( x ) {
	if ( x <= 0 ) return 0;
	if ( x >= 1 ) return 1;
	return x * x * ( 3 - 2 * x );
}

function smoother( x ) {
	if ( x <= 0 ) return 0;
	if ( x >= 1 ) return 1;
	return x * x * x * ( x * ( x * 6 - 15 ) + 10 );
}

function QuadraticIn (k) {
	return k * k;
}

function QuadraticOut (k) {
	return k * (2 - k);
}

function QuadraticInOut (k) {
	if ((k *= 2) < 1) {
		return 0.5 * k * k;
	}

	return - 0.5 * (--k * (k - 2) - 1);
}

function CubicIn (k) {
	return k * k * k;
}

function CubicOut (k) {
	return --k * k * k + 1;
}

function CubicInOut (k) {
	if ((k *= 2) < 1) {
		return 0.5 * k * k * k;
	}
	return 0.5 * ((k -= 2) * k * k + 2);
}

function QuarticIn (k) {
	return k * k * k * k;
}

function QuarticOut (k) {
	return 1 - (--k * k * k * k);
}

function QuarticInOut (k) {
	if ((k *= 2) < 1) {
		return 0.5 * k * k * k * k;
	}
	return - 0.5 * ((k -= 2) * k * k * k - 2);
}

function QuinticIn (k) {
	return k * k * k * k * k;
}

function QuinticOut (k) {
	return --k * k * k * k * k + 1;
}

function QuinticInOut (k) {
	if ((k *= 2) < 1) {
		return 0.5 * k * k * k * k * k;
	}
	return 0.5 * ((k -= 2) * k * k * k * k + 2);
}

function SinusoidalIn (k) {
	return 1 - Math.cos(k * Math.PI / 2);
}

function SinusoidalOut (k) {
	return Math.sin(k * Math.PI / 2);
}

function SinusoidalInOut (k) {
	return 0.5 * (1 - Math.cos(Math.PI * k));
}


function ExponentialIn (k) {
	return k === 0 ? 0 : Math.pow(1024, k - 1);
}

function ExponentialOut (k) {
	return k === 1 ? 1 : 1 - Math.pow(2, - 10 * k);
}

function ExponentialInOut (k) {
	if (k === 0) {
		return 0;
	}
	if (k === 1) {
		return 1;
	}
	if ((k *= 2) < 1) {
		return 0.5 * Math.pow(1024, k - 1);
	}
	return 0.5 * (- Math.pow(2, - 10 * (k - 1)) + 2);
}

function CircularIn (k) {
	return 1 - Math.sqrt(1 - k * k);
}

function CircularOut (k) {
	return Math.sqrt(1 - (--k * k));
}

function CircularInOut (k) {
	if ((k *= 2) < 1) {
		return - 0.5 * (Math.sqrt(1 - k * k) - 1);
	}
	return 0.5 * (Math.sqrt(1 - (k -= 2) * k) + 1);
}

function ElasticIn (k) {
	if (k === 0) {
		return 0;
	}

	if (k === 1) {
		return 1;
	}

	return -Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
}

function ElasticOut (k) {
	if (k === 0) {
		return 0;
	}
	if (k === 1) {
		return 1;
	}
	return Math.pow(2, -10 * k) * Math.sin((k - 0.1) * 5 * Math.PI) + 1;
}

function ElasticInOut (k) {
	if (k === 0) {
		return 0;
	}
	if (k === 1) {
		return 1;
	}
	k *= 2;
	if (k < 1) {
		return -0.5 * Math.pow(2, 10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI);
	}
	return 0.5 * Math.pow(2, -10 * (k - 1)) * Math.sin((k - 1.1) * 5 * Math.PI) + 1;
}

function BackIn (k) {
	var s = 1.70158;
	return k * k * ((s + 1) * k - s);
}

function BackOut (k) {
	var s = 1.70158;
	return --k * k * ((s + 1) * k + s) + 1;
}

function BackInOut (k) {
	var s = 1.70158 * 1.525;
	if ((k *= 2) < 1) {
		return 0.5 * (k * k * ((s + 1) * k - s));
	}
	return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
}
function BounceOut (k) {
	if (k < (1 / 2.75)) {
		return 7.5625 * k * k;
	} else if (k < (2 / 2.75)) {
		return 7.5625 * (k -= (1.5 / 2.75)) * k + 0.75;
	} else if (k < (2.5 / 2.75)) {
		return 7.5625 * (k -= (2.25 / 2.75)) * k + 0.9375;
	} else {
		return 7.5625 * (k -= (2.625 / 2.75)) * k + 0.984375;
	}
}

function BounceIn (k) {
	return 1 - BounceOut(1 - k);
}


function BounceInOut (k) {
	if (k < 0.5) {
		return BounceIn(k * 2) * 0.5;
	}
	return BounceOut(k * 2 - 1) * 0.5 + 0.5;
}

export default {
	zero,
	one,
	linear,
	smooth,
	smoother,
	QuadraticIn,
	QuadraticOut,
	QuadraticInOut,
	CubicIn,
	CubicOut,
	CubicInOut,
	QuarticIn,
	QuarticOut,
	QuarticInOut,
	QuinticIn,
	QuinticOut,
	QuinticInOut,
	SinusoidalIn,
	SinusoidalOut,
	SinusoidalInOut,
	ExponentialIn,
	ExponentialOut,
	ExponentialInOut,
	CircularIn,
	CircularOut,
	CircularInOut,
	ElasticIn,
	ElasticOut,
	ElasticInOut,
	BackIn,
	BackOut,
	BackInOut,
	BounceIn,
	BounceOut,
	BounceInOut,
}

