function expandCard(card) {
    const modal = $('#projectModal');
    const title = $(card).find('.card-title').text();
    const imageSrc = $(card).find('img').attr('src');
    const description = `This is a detailed description of ${title}. Replace this with actual project details.`;
    const languages = $(card).find('.card-text').text();
    const githubLink = "https://github.com/your-repo"; // Replace with actual link

    modal.find('.modal-title').text(title);
    modal.find('#modalImage').attr('src', imageSrc);
    modal.find('#modalDescription').text(description);
    modal.find('#modalLanguages').text(languages);
    modal.find('#modalGithubLink').attr('href', githubLink);

    modal.modal('show');
}