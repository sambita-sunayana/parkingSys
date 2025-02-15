// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Added BrowserRouter import
import { ThemeModeProvider } from './components/ThemeModeProvider';
import { SnackbarProvider } from 'notistack';
import { CssBaseline, Box, Container } from '@mui/material';

import HomePage from './components/HomePage';
import SlotList from './components/SlotList';  // List of slots
import SlotDetail from './components/DetailsSlot';  // Detail of a slot
import CreateSlot from './components/CreateSlot';  // Add a new slot
import SlotEdit from './components/UpdateSlot';  // Edit a slot
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ExportPage from './components/ExportPage';
import SearchPage from './components/SearchSlot';
import QRCodePage from "./components/QRCodePage"; // Import QR Code page

const App = () => {
    return (
        <Router> {/* Wrap the app with BrowserRouter */}
            <ThemeModeProvider>
                <CssBaseline />
                <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <Box display="flex" flexDirection="column" minHeight="100vh">
                        <Navbar />
                        <Container component="main" flex="1" className="box-container">
                            <Routes>
                                <Route exact path="/" element={<HomePage />} />
                                <Route path="/slots" element={<SlotList />} />
                                <Route path="/add-slot" element={<CreateSlot />} />
                                <Route path="/edit-slot/:id" element={<SlotEdit />} />
                                <Route path="/slot-detail/:id" element={<SlotDetail />} />
                                <Route path="/export" element={<ExportPage />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/qrcodes" element={<QRCodePage />} /> 
                                <Route path="*" element={<div>404 - Page Not Found</div>} />
                            </Routes>
                        </Container>
                        <Footer />
                    </Box>
                </SnackbarProvider>
            </ThemeModeProvider>
        </Router>  
    );
};

export default App;
