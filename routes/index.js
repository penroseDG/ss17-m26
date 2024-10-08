import AboutPage from "@/views/AboutPage.vue";
import About from "@/views/baitap/bai1-2/About.vue";
import Contact from "@/views/baitap/bai1-2/Contact.vue";
import Home from "@/views/baitap/bai1-2/Home.vue";
import Dashboard from "@/views/baitap/bai5/Dashboard.vue";
import Login from "@/views/baitap/bai5/Login.vue";
import Login from "@/views/baitap/bai5/Login.vue";
import Admin from "@/views/baitap/bai6/Admin.vue";
import Products from "@/views/baitap/bai6/Products.vue";
import Settings from "@/views/baitap/bai6/Settings.vue";
import Users from "@/views/baitap/bai6/Users.vue";
import ListPost from "@/views/baitap/bai7/ListPost.vue";
import PostDetail from "@/views/baitap/bai7/PostDetail.vue";
import PostNotFound from "@/views/baitap/bai7/PostNotFound.vue";
import ContactPage from "@/views/ContactPage.vue";
import Feedback from "@/views/Feedback.vue";
import HomePage from "@/views/HomePage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UserPage from "@/views/UserPage.vue";
import { createRouter } from "vue-router";

// B1: Định nghĩa danh sách các route
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: "/",
        alias: ["/home", "/home-page", "/trang-chu"],
        component: import(
            /* webpackChunkName: "home" */"@/views/HomePage.vue"
        ),
        name: "home",
    },
    {
        path: "/about",
        component: import(
            /* webpackChunkName: "about" */"@/views/AboutPage.vue"
        ),
        name: "about",
    },
    {
        path: "/contact",
        component: import(
            /* webpackChunkName: "contact" */"@/views/ContactPage.vue"
        ),
        name: "contact",
        redirect: "/feedback",
    },
    {
        path: "/feedback",
        component: import(
            /* webpackChunkName: "feedback" */"@/views/Feedback.vue"
        ),
        name: "feedback",
    },
    {
        path: "/user/:id",
        component: import(
            /* webpackChunkName: "user" */"@/views/UserPage.vue"
        ),
        name: "userPage",
        redirect: (to) => `/profile/${to.params.id}`,
    },
    {
        path: "/profile/:id",
        component: import(
            /* webpackChunkName: "profile" */"@/views/ProfilePage.vue"
        ),
        name: "profilePage",
    },
    {
        path: "list-product",
        component: import(
            /* webpackChunkName: "ListProduct" */"@/views/ListProduct.vue"
        ),
        name: "ListProduct",
    },
    {
        path: "/:pathMath(.*)*",
        component: import(
            /* webpackChunkName: "NotFound" */"@/views/NotFound.vue"
        ),
        name: "NotFound",
    },
    {
        path: "admin",
        component: import(
            /* webpackChunkName: "ListProduct" */"@/views/AdminIndex.vue"
        ),
        name: "admin",
        beforeEnter: (to, from, next) => {
            const isAuthentication = true;

            if (isAuthentication) {
                // Cho phep chuyen vao trang admin
                next()
            } else {
                next("/");
            }
        },
        children: [
            {
                path: "manager-user",
                component: import(
                    /* webpackChunkName: "NotFound" */"@/views/ManagerUser.vue"
                ),
                name: "managerUser",
            },
            {
                path: "manager-product",
                component: import(
                    /* webpackChunkName: "managerProduct" */"@/views/ManagerProduct.vue"
                ),
                name: "managerProduct",
            },
        ]
    },
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
    },
    {
        path: '/get-in-touch', // Alias cho Contact page
        redirect: '/contact',
    },
    {
        path: '/home', // Redirect từ /home về /
        redirect: '/',
    },
    {
        path: '/search',
        name: 'Search',
        component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue'),
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFound.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        beforeEnter: (to, from, next) => {
          if (isLoggedIn) {
            next(); // Cho phép truy cập vào Dashboard
          } else {
            next('/login'); // Chuyển hướng về trang đăng nhập
          }
        },
    },
    {
        path: '*',
        redirect: '/login', // Chuyển hướng về trang đăng nhập cho các đường dẫn không hợp lệ
    },
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        children: [
          {
            path: 'manager-user',
            name: 'Users',
            component: Users,
          },
          {
            path: 'manager-product',
            name: 'Products',
            component: Products,
          },
          {
            path: 'settings',
            name: 'Settings',
            component: Settings,
          },
        ],
    },
    {
        path: '*',
        redirect: '/admin', // Chuyển hướng về trang Admin nếu đường dẫn không hợp lệ
    },
    {
        path: '/posts',
        name: 'ListPost',
        component: ListPost,
      },
      {
        path: '/posts/:id',
        name: 'PostDetail',
        component: PostDetail,
        beforeEnter: (to, from, next) => {
          const id = parseInt(to.params.id);
          const validIds = [1, 2, 3]; // Mảng ID hợp lệ
          if (!validIds.includes(id)) {
            next({ name: 'PostNotFound' });
          } else {
            next();
          }
        },
      },
      {
        path: '/404',
        name: 'PostNotFound',
        component: PostNotFound,
      },
      {
        path: '*',
        redirect: '/404', // Chuyển hướng tới trang 404 nếu đường dẫn không hợp lệ
      },
  ],
});

export default router;