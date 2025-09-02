import '@styles/globals.css';
import {ReactNode} from 'react';

export default function RootLayout({children}: {children:ReactNode}){
return(
<html lang="en">
<head>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta CharSet = "UTF-8" />
<title>Deep Dive Into Moby-Dick</title>
</head>
<body>
<main>{children}</main>
</body>
</html>
);
}

