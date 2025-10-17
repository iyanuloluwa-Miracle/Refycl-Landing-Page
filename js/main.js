// Main JavaScript for Refyul

// Configuration - Replace with your Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE'; // You'll replace this after setting up Google Sheets

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Animate progress bar on load
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
        setTimeout(() => {
            progressBar.classList.add('loaded');
        }, 300);
    }

    // Add fade-in animation to elements
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    // Waitlist form submission
    const waitlistForm = document.getElementById('waitlistForm');
    if (waitlistForm) {
        waitlistForm.addEventListener('submit', handleWaitlistSubmission);
    }
});

// Waitlist form handling
function joinWaitlist() {
    const waitlistSection = document.getElementById('how-it-works');
    if (waitlistSection) {
        waitlistSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Scroll to the waitlist form
    setTimeout(() => {
        const form = document.getElementById('waitlistForm');
        if (form) {
            form.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, 500);
}

// Handle waitlist form submission
async function handleWaitlistSubmission(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnLoader = document.getElementById('btnLoader');
    const formMessage = document.getElementById('formMessage');
    
    // Disable button and show loader
    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnLoader.classList.remove('hidden');
    
    // Collect form data
    const formData = new FormData(form);
    
    // Get all selected checkboxes for "needs"
    const needs = Array.from(form.querySelectorAll('input[name="needs"]:checked'))
        .map(cb => cb.value)
        .join(', ');
    
    // Prepare data object
    const data = {
        fullName: formData.get('fullName'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        location: formData.get('location'),
        needs: needs || 'Not specified',
        vehicleType: formData.get('vehicleType') || 'Not specified',
        timestamp: new Date().toISOString()
    };
    
    try {
        // Submit to Google Sheets (or your backend)
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        // Show success message
        formMessage.textContent = '🎉 Success! You\'re on the waitlist. Check your email for confirmation.';
        formMessage.className = 'mt-4 p-3 rounded-lg bg-green-100 text-green-800 border border-green-300';
        formMessage.classList.remove('hidden');
        
        // Reset form
        form.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
        
    } catch (error) {
        console.error('Error:', error);
        formMessage.textContent = '❌ Oops! Something went wrong. Please try again or email us directly.';
        formMessage.className = 'mt-4 p-3 rounded-lg bg-red-100 text-red-800 border border-red-300';
        formMessage.classList.remove('hidden');
    } finally {
        // Re-enable button
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnLoader.classList.add('hidden');
    }
}

