const menuData = [
    {
        label: "Home",
        to: "/"
    },
    {
        label: "Profile",
        to: "/profile",
        children: [
            {
                label: "Details",
                to: "/details",
                children: [
                    {
                        label: "Location",
                        to: "/location",
                        children: [
                            {
                                label: "Newcatle, UK",
                                to: "/view location",
                            },
                            {
                                label: "Change Address",
                                to: "/chnage-address",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        label: "Contact us",
        to: "/contact-us",
    },
    {
        label: "Settings",
        to: "/settings",
        children: [
            {
                label: "Account",
                to: "/Account",
                children: [
                    {
                        label: "Login",
                        to: "/login",
                    },
                    {
                        label: "Register",
                        to: "/register",
                    }
                ]
            },
            {
                label: "Security",
                to: "/security",
                children: [
                    {
                        label: "Change password",
                        to: "/login",
                    },
                    {
                        label: "Authentication",
                        to: "/register",
                        children: [
                            {
                                label: "Add MFA",
                                to: "/add-mfa",
                            },
                            {
                                label: "Remove MFA",
                                to: "/remove-mfa",
                            }
                        ]
                    }
                ]
            },
        ]
    }
]

export default menuData