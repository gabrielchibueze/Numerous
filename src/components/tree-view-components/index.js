const data = [
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
                                label: "Grace",
                                to: "/login",
                            },
                            {
                                label: "Gbariel",
                                to: "/register",
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
                        label: "Login",
                        to: "/login",
                    },
                    {
                        label: "Register",
                        to: "/register",
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
                    }
                ]
            },
        ]
    }
]

export default data