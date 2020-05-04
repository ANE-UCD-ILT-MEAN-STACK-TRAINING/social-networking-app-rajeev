import { MeanCoursePage } from './app.po';

describe('mean-course App', () => {
  let page: MeanCoursePage;

  beforeEach(() => {
    page = new MeanCoursePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
