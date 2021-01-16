import css from './styles.css';
import refs from '../src/refs/timerRefs.js';

// let targetDateF = 'Jan 20 2021 00:00:00';
// function myTimer(date) {
//   let timeDelta = new Date(date) - Date.now();
//   const days = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
//   const hours = Math.floor(
//     (timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
//   );
//   const mins = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((timeDelta % (1000 * 60)) / 1000);

//   refs.daysContent.textContent = days;
//   refs.hoursContent.textContent = hours;
//   refs.minsContent.textContent = mins;
//   refs.secsContent.textContent = secs;
// }

// setInterval(() => {
//   myTimer(targetDateF);
// }, 1000);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.date = targetDate;
  }

  count() {
    let timeDelta = this.date - Date.now();
    const days = Math.floor(timeDelta / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeDelta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const mins = Math.floor((timeDelta % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((timeDelta % (1000 * 60)) / 1000);

    refs.daysContent.textContent = days;
    refs.hoursContent.textContent = hours;
    refs.minsContent.textContent = mins;
    refs.secsContent.textContent = secs;
  }

  start() {
    this.count();
    let interval = setInterval(() => {
      this.count();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 20 2021'),
});

timer.start();
