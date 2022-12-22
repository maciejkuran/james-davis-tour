export const events = [];

class Event {
  constructor(city, date, address, vip, standard) {
    this.city = city;
    this.date = date;
    this.address = address;
    this.vip = vip;
    this.standard = standard;
    this.id = Math.round(Math.random() * 1000000);
    events.push(this);
  }

  set date(date) {
    const locale = 'en-US';
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'short',
    };

    this._date = String(new Intl.DateTimeFormat(locale, options).format(date)).toUpperCase();
  }

  get date() {
    return this._date;
  }
}

const event_1 = new Event(
  'HOUSTON',
  new Date(2023, 0, 14, 20, 0),
  'The Harmony Opera House',
  150,
  35
);
const event_2 = new Event(
  'DALLAS',
  new Date(2023, 0, 28, 20, 0),
  'The Bluebell Assembly Hall',
  150,
  35
);

const event_3 = new Event(
  'PHOENIX',
  new Date(2023, 1, 24, 19, 0),
  'The Sprite Concert Hall',
  150,
  35
);

const event_4 = new Event('DENVER', new Date(2023, 2, 3, 19, 0), 'The Casino Theater', 150, 35);

const event_5 = new Event('CHICAGO', new Date(2023, 3, 7, 21, 0), 'The Eclipse Theater', 150, 35);

const event_6 = new Event(
  'CLEVELAND',
  new Date(2023, 3, 14, 20, 0),
  'The Spotlight Amphitheater',
  150,
  35
);
