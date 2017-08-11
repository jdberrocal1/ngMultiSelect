import { NgMultiSelectPage } from './app.po';

describe('ng-multi-select App', () => {
  let page: NgMultiSelectPage;

  beforeEach(() => {
    page = new NgMultiSelectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
