document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = [
        
        {

            title: 'The Importance of Quran in Daily Life',
            content: 'The Quran is the ultimate source of guidance for Muslims. It provides a complete code of conduct for life. The Quran’s significance in the daily lives of Muslims cannot be overstated. It is a source of divine guidance, a moral compass, a legal framework, and a provider of comfort and hope. By integrating its teachings into every aspect of life, Muslims strive to live in accordance with Allah SWT’s will, achieving peace, fulfillment, and a deep sense of purpose.'
        },
        {
            title: 'Understanding Hadiths',
            content: 'Hadiths are essential for understanding the Sunnah of the Prophet Muhammad SAW (Peace Be Upon Him). Ultimately, Hadiths offer comprehensive guidance for all aspects of life. They address a wide range of topics, from personal hygiene and dietary habits to governance and conflict resolution. By understanding Hadiths, Muslims can navigate the complexities of modern life while staying true to their faith, integrating the Prophet SAW’s timeless wisdom into their everyday actions and decisions. In conclusion, understanding the Hadiths is essential for Muslims seeking to live according to the teachings of Islam. They provide clarity, context, and detailed guidance on a myriad of issues, ensuring that believers can follow the teachings of Prophet Muhammad SAW’s example in all aspects of life. Through the study and application of Hadiths, we Muslims can foster personal growth, social harmony, and a deeper connection with our faith'
        },
        {
            title: 'Lessons from the Quran',
        
            content: 'The Quran offers timeless lessons that are applicable in every aspect of life.Gratitude (Shukr) is a recurring theme in the Quran. Believers are reminded to be thankful for Allah’s countless blessings and to express their gratitude through words and actions. This lesson promotes contentment and a positive outlook, helping Muslims appreciate the goodness in their lives and remain humble.The Quran teaches that every individual is accountable for their actions and will be judged in the Hereafter. This awareness of accountability instills a sense of moral responsibility, motivating Muslims to live ethically and strive for righteousness, knowing that their deeds have eternal consequences.Along with advocating for social responsibility and the welfare of the community, It encourages acts of charity, support for the needy, and the maintenance of family ties. These teachings foster a spirit of solidarity, compassion, and communal harmony, urging Muslims to contribute positively to society.'
        }
        
        
        // Add more blog posts as needed
    ];

    const blogContainer = document.getElementById('blog-posts');
    const loadMoreButton = document.getElementById('load-more');

    let currentIndex = 0;
    const postsPerPage = 2;

    function loadBlogPosts() {
        const fragment = document.createDocumentFragment();

        for (let i = currentIndex; i < currentIndex + postsPerPage && i < blogPosts.length; i++) {
            const post = document.createElement('div');
            post.classList.add('blog-post');
            post.innerHTML = `<h3>${blogPosts[i].title}</h3><p>${blogPosts[i].content}</p>`;
            fragment.appendChild(post);
        }

        blogContainer.appendChild(fragment);
        currentIndex += postsPerPage;

        if (currentIndex >= blogPosts.length) {
            loadMoreButton.style.display = 'none';
        }
    }

    loadMoreButton.addEventListener('click', loadBlogPosts);
    loadBlogPosts(); // Initial load
});
