export const ComponentJson:ComponentJsonType = {
    "carousel": [
      {
        "title": "Basic Carousel",
        "bodyText": "A simple image carousel with autoplay and arrows."
      },
      {
        "title": "Text Slider",
        "bodyText": "Cycle through dynamic text content for testimonials or quotes."
      },
      {
        "title": "Coverflow Carousel",
        "bodyText": "A 3D-style carousel that mimics Apple's coverflow effect."
      }
    ],
    "hero": [
      {
        "title": "Centered Hero",
        "bodyText": "A clean hero section with headline and call-to-action centered on the screen."
      },
      {
        "title": "Split Hero",
        "bodyText": "A split layout hero with image on one side and text on the other."
      },
      {
        "title": "Animated Hero",
        "bodyText": "Hero section with scroll-triggered or GSAP-based entrance animations."
      }
    ],
    "buttons": [
      {
        "title": "Primary Button",
        "bodyText": "Standard CTA button with hover and active states."
      },
      {
        "title": "Ghost Button",
        "bodyText": "Transparent button with border, ideal for minimal designs."
      },
      {
        "title": "Icon Button",
        "bodyText": "Button that features only an icon, for compact UIs."
      }
    ],
    "navigation": [
      {
        "title": "Sticky Navbar",
        "bodyText": "A top navigation bar that remains fixed while scrolling."
      },
      {
        "title": "Sidebar Menu",
        "bodyText": "Vertical side menu for dashboard-style layouts."
      },
      {
        "title": "Mega Menu",
        "bodyText": "Advanced dropdown navigation with multiple columns."
      }
    ],
    "modals": [
      {
        "title": "Basic Modal",
        "bodyText": "Popup modal with close button and optional overlay."
      },
      {
        "title": "Confirmation Dialog",
        "bodyText": "Modal with accept/cancel buttons for user decisions."
      },
      {
        "title": "Fullscreen Modal",
        "bodyText": "Takes over the entire screen for immersive UX."
      }
    ],
    "forms": [
      {
        "title": "Login Form",
        "bodyText": "Basic authentication form with email and password fields."
      },
      {
        "title": "Registration Form",
        "bodyText": "Form to create a new user account with validation."
      },
      {
        "title": "Multi-step Form",
        "bodyText": "Form that breaks input into multiple steps for better UX."
      }
    ],
    "cards": [
      {
        "title": "Product Card",
        "bodyText": "Showcase product with image, title, price, and CTA."
      },
      {
        "title": "User Profile Card",
        "bodyText": "Card displaying user avatar, bio, and links."
      },
      {
        "title": "Hover Animation Card",
        "bodyText": "Card that animates on hover using scaling or transitions."
      }
    ],
    "footers": [
      {
        "title": "Simple Footer",
        "bodyText": "Minimal footer with copyright and links."
      },
      {
        "title": "Multi-column Footer",
        "bodyText": "Footer with multiple sections for navigation and info."
      },
      {
        "title": "Newsletter Footer",
        "bodyText": "Footer that includes a subscribe form and social links."
      }
    ],
    "animations": [
      {
        "title": "Fade In",
        "bodyText": "Element fades into view on scroll."
      },
      {
        "title": "Slide Up",
        "bodyText": "Slide animation from bottom with opacity fade."
      },
      {
        "title": "3D Flip Card",
        "bodyText": "Card that flips to reveal back side on hover."
      }
    ],
    "loaders": [
      {
        "title": "Spinner Loader",
        "bodyText": "Circular animated loading indicator."
      },
      {
        "title": "Dots Loader",
        "bodyText": "Bouncing or fading dots for async loading."
      },
      {
        "title": "Skeleton Loader",
        "bodyText": "Placeholder loading state with gray blocks."
      }
    ],
    "toggles": [
      {
        "title": "Dark Mode Toggle",
        "bodyText": "Switch between light and dark themes."
      },
      {
        "title": "Switch Toggle",
        "bodyText": "UI toggle switch for boolean options."
      },
      {
        "title": "Accordion",
        "bodyText": "Expandable/collapsible content sections."
      }
    ],
    "stats": [
      {
        "title": "Counter Stat",
        "bodyText": "Animated number counter for metrics."
      },
      {
        "title": "Progress Bar",
        "bodyText": "Visual representation of progress or skill levels."
      },
      {
        "title": "Donut Chart",
        "bodyText": "Animated circular chart with stats."
      }
    ],
    "banners": [
      {
        "title": "Promo Banner",
        "bodyText": "Strip at the top of the page for promotions or messages."
      },
      {
        "title": "Cookie Consent Banner",
        "bodyText": "Legal compliance notice with accept option."
      }
    ],
    "alerts": [
      {
        "title": "Success Alert",
        "bodyText": "Green alert to confirm successful action."
      },
      {
        "title": "Error Alert",
        "bodyText": "Red alert to notify user of an issue."
      },
      {
        "title": "Warning Alert",
        "bodyText": "Yellow alert for potential problems."
      }
    ],
    "avatars": [
      {
        "title": "Circular Avatar",
        "bodyText": "Rounded user profile picture."
      },
      {
        "title": "Avatar Group",
        "bodyText": "Overlapping avatars to show group members."
      }
    ],
    "badges": [
      {
        "title": "Notification Badge",
        "bodyText": "Small badge used to show counts or alerts."
      },
      {
        "title": "Status Badge",
        "bodyText": "Colored badge showing online/offline/away."
      }
    ],
    "breadcrumbs": [
      {
        "title": "Basic Breadcrumb",
        "bodyText": "Shows page hierarchy and navigation path."
      }
    ],
    "tabs": [
      {
        "title": "Horizontal Tabs",
        "bodyText": "Switch between sections of content horizontally."
      },
      {
        "title": "Vertical Tabs",
        "bodyText": "Tabs aligned vertically for dashboards."
      }
    ]
}

export type ComponentItem = {
  title: string;
  bodyText: string;
};

export type ComponentJsonType = {
  [category: string]: ComponentItem[];
};