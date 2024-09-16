
const users = [
    {
      id: 1,
      name: 'Amani Stacy',
      posts: [
        { timestamp: '2024-09-10T12:00:00Z', likes: 15 },
        { timestamp: '2024-09-12T12:00:00Z', likes: 5 }
      ]
    },
    {
      id: 2,
      name: 'Wanjiru Njeri',
      posts: [
        { timestamp: '2024-09-11T12:00:00Z', likes: 20 },
        { timestamp: '2024-09-14T12:00:00Z', likes: 12 }
      ]
    },
    {
      id: 3,
      name: 'Juma Otieno',
      posts: [
        { timestamp: '2024-09-05T12:00:00Z', likes: 8 }
      ]
    },
    {
      id: 4,
      name: 'Kiptoo Kibet',
      posts: [
        { timestamp: '2024-09-13T12:00:00Z', likes: 25 },
        { timestamp: '2024-09-15T12:00:00Z', likes: 30 }
      ]
    },
    {
      id: 5,
      name: 'Asha Abdi',
      posts: [
        { timestamp: '2024-09-14T12:00:00Z', likes: 18 }
      ]
    }
  ];


  function analyzeUserData(users) {
    const ONE_WEEK = 7 * 24 * 60 * 60 * 1000; // One week in milliseconds
    let activeUsers = 0;
    let totalPopularPosts = 0;
    let totalLikes = 0;
  
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      let userHasPopularPosts = false;
  
      for (let j = 0; j < user.posts.length; j++) {
        const post = user.posts[j];
        const postDate = new Date(post.timestamp);
  
        // Check if the post is recent and has enough likes
        if ((new Date() - postDate) <= ONE_WEEK && post.likes >= 10) {
          userHasPopularPosts = true;
          totalLikes += post.likes;
          totalPopularPosts++;
        }
      }
  
      // If the user has popular posts, count them as active
      if (userHasPopularPosts) {
        activeUsers++;
      }
    }
  
    return {
      activeUsers: activeUsers,
      totalPopularPosts: totalPopularPosts,
      totalLikes: totalLikes
    };
  }
  
  //calculate average likes
  const result = analyzeUserData(users);
  let averageLikesPerUser = 0;
  
  if (result.activeUsers > 0) {
    averageLikesPerUser = result.totalLikes / result.activeUsers;
  }
  

  console.log({
    activeUsers: result.activeUsers,
    totalPopularPosts: result.totalPopularPosts,
    totalLikes: result.totalLikes,
    averageLikesPerUser: averageLikesPerUser
  });
  