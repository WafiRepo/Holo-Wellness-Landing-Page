exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  if (page.path.match(/^\/(detail-approach|detail-services|learning-center)/)) {
    deletePage(page);
    createPage({
      ...page,
      context: { ...page.context },
      defer: true, // Disables SSR for these pages
    });
  }
};