import { Angular2treePage } from './app.po';

describe('angular2tree App', () => {
  let page: Angular2treePage;

  beforeEach(() => {
    page = new Angular2treePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
