import { AppAthleticsPage } from './app.po';

describe('app-athletics App', () => {
  let page: AppAthleticsPage;

  beforeEach(() => {
    page = new AppAthleticsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
