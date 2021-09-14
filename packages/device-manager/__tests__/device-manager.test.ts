import { expect } from 'chai';

import { printName } from '../src/device-manager';

describe('device-manager', () => {
  it('needs tests', () => {
    expect(printName('Jah', 'Rastafari')).to.equal('Jah Rastafari');
  });
});
