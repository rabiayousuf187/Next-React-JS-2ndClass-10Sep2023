// pages/users/[id].js or pages/users/[id].tsx

import { useRouter } from 'next/router';


// anything that type in url with adjacent Page like "how-to-use-keyboard.js"
// will get into another page
// e.g: http://localhost:3000/blog-post/fjjgk
// render: User ID: fjjgk

function UserPage() {
  const router = useRouter();
  const { sno } = router.query; // Access the dynamic route parameter

  return <div>User ID: {sno}</div>;
}

export default UserPage;
