import { throttle } from "./libs/utils";
import "./polyfills.js";
import "./blocks.js";

// Функции

// Единицы высоты (ширины) экрана
function updateVH() {
	const { height = window.innerHeight, width = window.innerWidth } = window.visualViewport || {};

	document.documentElement.style.setProperty('--vh', `${height * 0.01}px`);
	['resize', 'orientationchange'].forEach(event => {
		window.addEventListener(event, throttle(updateVH, 200), { passive: true });
	});
}

// Ширина скроллбара
const setScrollbarWidth = () => {
	document.documentElement.style.setProperty('--sw', `${window.innerWidth - document.documentElement.clientWidth}px`);
}

// Шапка

const setHeader = () => {
	const header = document.querySelector('.header');
	const headerBurger = header.querySelector('.header__burger');

	const updateHeader = () => {
		const headerHeight = header ? header.offsetHeight : 0;
		document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
	}

	headerBurger.addEventListener('click', () => {
		header.classList.toggle('is-open');
		if (header.classList.contains('is-open')) {
			document.body.classList.add('no-scroll');
		} else {
			document.body.classList.remove('no-scroll');
		}
	});

	updateHeader();
	window.addEventListener('resize', throttle(updateHeader, 200), { passive: true });
}

const setRocketVideoTime = () => {
	const video = document.querySelector('.promo__bg video');
	if (!video) return;

	const setDuration = () => {
		const videoTime = video.duration || 0;
		document.documentElement.style.setProperty('--video-time', `${videoTime}s`);
		video.parentElement.classList.add('is-ready');
	};

	video.addEventListener('loadedmetadata', setDuration);
};

const setParallax = () => {
	const parallaxBlocks = document.querySelectorAll('[data-parallax]');

	parallaxBlocks.forEach(block => {
		const items = block.querySelectorAll('[data-parallax-item]');

		let mouseX = 0, mouseY = 0;

		// Слушаем движение мыши внутри блока
		block.addEventListener('mousemove', e => {
			const rect = block.getBoundingClientRect();
			mouseX = e.clientX - rect.left - rect.width / 2;
			mouseY = e.clientY - rect.top - rect.height / 2;
		});

		// Сброс при уходе мыши
		block.addEventListener('mouseleave', () => {
			mouseX = 0;
			mouseY = 0;
		});

		// Для каждого элемента хранится текущее положение
		const states = Array.from(items).map(() => ({ x: 0, y: 0 }));

		function animate() {
			items.forEach((item, index) => {
				const data = item.dataset.parallaxItem.split(',');
				const radius = parseFloat(data[0]) || 10;  // максимальное смещение
				const speed = parseFloat(data[1]) || 0.1;  // скорость догонять цель

				// текущее положение догоняет цель
				states[index].x += (mouseX - states[index].x) * speed;
				states[index].y += (mouseY - states[index].y) * speed;

				// применяем смещение с радиусом
				const translateX = (states[index].x / (block.offsetWidth / 2)) * radius;
				const translateY = (states[index].y / (block.offsetHeight / 2)) * radius;

				item.style.transform = `translate(${translateX}px, ${translateY}px)`;
			});

			requestAnimationFrame(animate);
		}

		animate();
	});
}

const setStopAnimation = () => {
	document.body.classList.add('is-resize');
	setTimeout(() => {
		document.body.classList.remove('is-resize');
	}, 500);
}

const setCounters = (selector) => {
	const container = document.querySelector(selector);
	if (!container) return;

	const counters = container.querySelectorAll('[data-counter]');

	const startCounting = (counter) => {
		const target = parseFloat(counter.textContent.replace(/\s/g, ''));
		const duration = parseInt(counter.getAttribute('data-counter'), 10) || 2000;
		counter.textContent = 0;
		let start = 0;
		const startTime = performance.now();

		function update(currentTime) {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);
			const currentValue = Math.floor(progress * target);
			counter.textContent = currentValue.toLocaleString('en-US');

			if (progress < 1) {
				requestAnimationFrame(update);
			} else {
				counter.textContent = target.toLocaleString('en-US');
			}
		}

		setTimeout(() => requestAnimationFrame(update), 500);
	};

	const observer = new IntersectionObserver((entries, obs) => {
		entries.forEach(entry => {
			if (entry.isIntersecting && entry.intersectionRatio >= 1) {
				const counter = entry.target;
				startCounting(counter);
				obs.unobserve(counter);
			}
		});
	}, {
		threshold: 1,
	});

	counters.forEach(counter => observer.observe(counter));
};

const setTeamCursorCoords = () => {
	const team = document.querySelector('.team');
	if (!team) return;

	const updateCursorPosition = (clientX, clientY) => {
		// координаты относительно окна
		team.dataset.mouseX = Math.round(clientX);
		team.dataset.mouseY = Math.round(clientY);
		team.style.setProperty('--mouse-x', `${clientX}px`);
		team.style.setProperty('--mouse-y', `${clientY}px`);
		team.classList.add('is-active');
	};

	const handleMove = (event) => {
		let clientX, clientY;

		if (event.touches && event.touches.length > 0) {
			clientX = event.touches[0].clientX;
			clientY = event.touches[0].clientY;
		} else {
			clientX = event.clientX;
			clientY = event.clientY;
		}

		// проверяем, находится ли курсор внутри .team
		const rect = team.getBoundingClientRect();
		const inside =
			clientX >= rect.left &&
			clientX <= rect.right &&
			clientY >= rect.top &&
			clientY <= rect.bottom;

		if (inside) {
			updateCursorPosition(clientX, clientY);
		} else {
			handleLeave();
		}
	};

	const handleLeave = () => {
		team.style.setProperty('--mouse-x');
		team.style.setProperty('--mouse-y');
		team.classList.remove('is-active');
	};

	document.addEventListener('mousemove', handleMove);
	document.addEventListener('touchmove', handleMove, { passive: true });
	document.addEventListener('touchend', handleLeave);
};




// Запуск функций
updateVH();
setScrollbarWidth();
setHeader();
setParallax();
setStopAnimation();
setCounters('.about');
setTeamCursorCoords();

document.addEventListener('DOMContentLoaded', setRocketVideoTime);
window.addEventListener('resize', throttle(setRocketVideoTime, 200), { passive: true });
window.addEventListener('resize', throttle(setStopAnimation, 500), { passive: true });