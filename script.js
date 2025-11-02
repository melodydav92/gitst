// Global variables
let currentCampaignIndex = 0;
let campaigns = [];
let selectedAmount = 0;
let selectedPaymentMethod = '';
let donationType = 'one-time';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeCampaigns();
    setupEventListeners();
    renderCampaigns();
    renderCampaignDots();
});

// Initialize campaigns data
function initializeCampaigns() {
    campaigns = [
        {
            id: 1,
            title: "Gaza Children Emergency Relief",
            description: "Provide immediate humanitarian aid including food, medical supplies, shelter, and educational support for children affected by the crisis in Gaza.",
            raised: 100,
            goal: 50000,
            donors: 5,
            image: "public/campaign-education.jpg",
            category: "Emergency Relief",
        },
        {
            id: 2,
            title: "Education for Underprivileged Children",
            description: "Help provide quality education and school supplies to children in rural communities who lack access to basic learning resources.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Education",
        },
        {
            id: 3,
            title: "Medical Aid for Emergency Relief",
            description: "Support critical medical supplies and healthcare services for communities affected by natural disasters and health crises.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 4,
            title: "Reforestation & Climate Action",
            description: "Plant trees and restore ecosystems to combat climate change and preserve biodiversity for future generations.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-environment.jpg",
            category: "Environment",
        },
        {
            id: 5,
            title: "Emergency Aid for Gaza Children",
            description: "Provide immediate relief including food, medical supplies, shelter, and educational support for children affected by the crisis in Gaza.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Emergency Relief",
        },
        {
            id: 6,
            title: "ALS Ice Bucket Challenge",
            description: "Raise awareness and funds for ALS research through the viral ice bucket challenge that took social media by storm.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 7,
            title: "TCS London Marathon",
            description: "Support charity runners in the iconic London Marathon, raising millions for various causes through sponsorship and participation.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Sports",
        },
        {
            id: 8,
            title: "TV-aksjonen",
            description: "Norway's largest annual fundraiser supporting international development projects and humanitarian aid worldwide.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Children",
        },
        {
            id: 9,
            title: "World's Biggest Coffee Morning",
            description: "Join communities across the UK for coffee mornings that raise funds for Macmillan Cancer Support through local events.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 10,
            title: "Giving Tuesday",
            description: "The global generosity movement encouraging people to give back to their communities and support charitable causes.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Community",
        },
        {
            id: 11,
            title: "ZEvent",
            description: "France's largest gaming charity stream raising funds for children with disabilities through 24-hour gaming marathons.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Children",
        },
        {
            id: 12,
            title: "Pan-Mass Challenge",
            description: "Bicycle riders pedal across Massachusetts to raise funds for cancer research and patient support at Dana-Farber Cancer Institute.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 13,
            title: "Red Nose Day",
            description: "Comic Relief's annual fundraising event using comedy and entertainment to fight poverty and social injustice in the UK and Africa.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Community",
        },
        {
            id: 14,
            title: "Comic Relief",
            description: "UK charity using comedy to raise funds for development work in Africa and social issues in the UK.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Community",
        },
        {
            id: 15,
            title: "Movember",
            description: "Men grow mustaches for a month to raise awareness and funds for men's health issues, particularly prostate cancer.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 16,
            title: "Live Aid",
            description: "Historic 1985 concert that raised funds for famine relief in Ethiopia and helped establish modern celebrity charity events.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Emergency Relief",
        },
        {
            id: 17,
            title: "Children in Need",
            description: "BBC's annual telethon raising funds for disadvantaged children and young people across the UK.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Children",
        },
        {
            id: 18,
            title: "Stand Up to Cancer",
            description: "Multi-network TV event bringing together celebrities and cancer survivors to raise funds for cancer research.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 19,
            title: "The Trevor Project Fundraiser",
            description: "Support suicide prevention and crisis intervention for LGBTQ youth through various fundraising initiatives.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Children",
        },
        {
            id: 20,
            title: "No-Shave November",
            description: "Men and women forgo shaving for a month to raise awareness and funds for cancer research and men's health.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 21,
            title: "Team Trees",
            description: "MrBeast and Mark Rober planted 20 million trees in 2020 through online donations and challenges.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-environment.jpg",
            category: "Environment",
        },
        {
            id: 22,
            title: "Team Seas",
            description: "Ocean cleanup initiative aiming to remove 30 million pounds of trash from the world's oceans and coastlines.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-environment.jpg",
            category: "Environment",
        },
        {
            id: 23,
            title: "Global Citizen Festival",
            description: "Music festival that combines entertainment with advocacy to end extreme poverty and drive social change.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Community",
        },
        {
            id: 24,
            title: "One Love Manchester",
            description: "Benefit concert organized by Ariana Grande following the Manchester Arena bombing to support victims and their families.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Emergency Relief",
        },
        {
            id: 25,
            title: "Charity: Water Campaigns",
            description: "Provide clean drinking water to people in developing countries through well construction and water system installation.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-environment.jpg",
            category: "Environment",
        },
        {
            id: 26,
            title: "Kiva Lending Teams",
            description: "Microfinance platform connecting lenders with entrepreneurs in developing countries through community lending teams.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Community",
        },
        {
            id: 27,
            title: "Save the Children's Christmas Jumper Day",
            description: "UK fundraising campaign where people wear ugly Christmas jumpers to raise funds for children's charities worldwide.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Children",
        },
        {
            id: 28,
            title: "World Wildlife Fund Earth Hour Donations",
            description: "Annual event where people turn off lights for one hour to raise awareness and funds for environmental conservation.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-environment.jpg",
            category: "Environment",
        },
        {
            id: 29,
            title: "GoFundMe Global Relief Drives",
            description: "Crowdfunding platform facilitating emergency relief efforts for natural disasters, medical crises, and humanitarian needs.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Emergency Relief",
        },
        {
            id: 30,
            title: "UNICEF Emergency Appeals",
            description: "United Nations Children's Fund emergency response programs providing immediate aid to children in crisis situations worldwide.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Children",
        },
        {
            id: 31,
            title: "Doctors Without Borders Crisis Fund",
            description: "International medical humanitarian organization providing emergency medical care in conflict zones and disaster areas.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 32,
            title: "Feeding America Covid Relief Fund",
            description: "Emergency food assistance program providing meals to families affected by the COVID-19 pandemic across the United States.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Emergency Relief",
        },
        {
            id: 33,
            title: "American Cancer Society Relay for Life",
            description: "Community-based fundraising event where teams camp out overnight to raise funds for cancer research and patient support.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 34,
            title: "St. Jude Children's Research Hospital Marathon",
            description: "Annual marathon and fundraising event supporting the world's leading pediatric cancer research hospital.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-medical.jpg",
            category: "Medical",
        },
        {
            id: 35,
            title: "Habitat for Humanity Global Village Campaign",
            description: "International housing charity building affordable homes and communities for families in need around the world.",
            raised: Math.floor(Math.random() * (5000 - 100 + 1)) + 100,
            goal: Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000,
            donors: Math.floor(Math.random() * (50 - 5 + 1)) + 5,
            image: "public/campaign-education.jpg",
            category: "Community",
        },
    ];
}

// Setup event listeners
function setupEventListeners() {
    // Mobile menu toggle
    document.addEventListener('click', function(e) {
        if (e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu button')) {
            return;
        }
        if (!e.target.closest('#menu-icon') && !e.target.closest('#mobile-menu')) {
            document.getElementById('mobile-menu').classList.add('hidden');
        }
    });

    // File upload
    document.getElementById('proof-upload').addEventListener('change', handleFileUpload);
}

// Toggle mobile menu
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    } else {
        menu.classList.add('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
}

// Render campaigns
function renderCampaigns() {
    const container = document.getElementById('campaigns-container');
    const visibleCampaigns = campaigns.slice(currentCampaignIndex, currentCampaignIndex + 3);

    container.innerHTML = '';

    visibleCampaigns.forEach((campaign, index) => {
        const progress = (campaign.raised / campaign.goal) * 100;
        const daysLeft = Math.floor(Math.random() * 30) + 1;

        const campaignHTML = `
            <div class="group overflow-hidden transition-all duration-300 hover:shadow-lg border-0 bg-card animate-fade-in rounded-lg" style="animation-delay: ${index * 0.1}s">
                <div class="relative overflow-hidden aspect-video">
                    <img src="${campaign.image}" alt="${campaign.title}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                    <div class="absolute top-4 left-4">
                        <span class="px-3 py-1 bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold rounded-full">
                            ${campaign.category}
                        </span>
                    </div>
                </div>

                <div class="p-6 space-y-4">
                    <div class="space-y-2">
                        <h3 class="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                            ${campaign.title}
                        </h3>
                        <p class="text-sm text-muted-foreground line-clamp-2">${campaign.description}</p>
                    </div>

                    <div class="space-y-3">
                        <div class="space-y-2">
                            <div class="flex justify-between items-baseline">
                                <div>
                                    <span class="text-2xl font-bold text-primary">
                                        $${campaign.raised.toLocaleString()}
                                    </span>
                                    <span class="text-sm text-muted-foreground ml-2">
                                        raised of $${campaign.goal.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            <div class="w-full bg-muted rounded-full h-2">
                                <div class="bg-primary h-2 rounded-full transition-all duration-300" style="width: ${progress}%"></div>
                            </div>
                        </div>

                        <div class="flex items-center justify-between text-sm text-muted-foreground">
                            <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
                                </svg>
                                <span>${campaign.donors} donors</span>
                            </div>
                            <span>${daysLeft} days left</span>
                        </div>
                    </div>

                    <button onclick="openDonationModal('${campaign.title}')" class="w-full group/btn text-lg font-bold py-4 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white border-0 rounded-md flex items-center justify-center gap-2">
                        <svg class="w-5 h-5 group-hover/btn:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                        </svg>
                        Donate Now
                    </button>
                </div>
            </div>
        `;

        container.innerHTML += campaignHTML;
    });
}

// Render campaign dots
function renderCampaignDots() {
    const dotsContainer = document.getElementById('campaign-dots');
    const totalPages = Math.ceil(campaigns.length / 3);

    dotsContainer.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.onclick = () => goToCampaignPage(i);
        dot.className = `w-2 h-2 rounded-full transition-colors ${
            Math.floor(currentCampaignIndex / 3) === i
                ? "bg-primary"
                : "bg-muted-foreground/30"
        }`;
        dotsContainer.appendChild(dot);
    }
}

// Navigate campaigns
function nextCampaigns() {
    if (currentCampaignIndex + 3 >= campaigns.length) {
        currentCampaignIndex = 0;
    } else {
        currentCampaignIndex += 3;
    }
    renderCampaigns();
    renderCampaignDots();
}

function prevCampaigns() {
    if (currentCampaignIndex - 3 < 0) {
        currentCampaignIndex = Math.max(0, campaigns.length - 3);
    } else {
        currentCampaignIndex -= 3;
    }
    renderCampaigns();
    renderCampaignDots();
}

function goToCampaignPage(pageIndex) {
    currentCampaignIndex = pageIndex * 3;
    renderCampaigns();
    renderCampaignDots();
}

// Donation modal functions
function openDonationModal(campaignTitle) {
    document.getElementById('modal-campaign-title').textContent = campaignTitle;
    document.getElementById('donation-modal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeDonationModal() {
    document.getElementById('donation-modal').classList.add('hidden');
    document.body.style.overflow = '';
    resetDonationForm();
}

function resetDonationForm() {
    selectedAmount = 0;
    selectedPaymentMethod = '';
    donationType = 'one-time';

    document.getElementById('one-time-tab').classList.add('one-time-active');
    document.getElementById('monthly-tab').classList.remove('one-time-active');

    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-primary-foreground');
        btn.classList.add('border-border', 'hover:border-primary');
    });

    document.getElementById('custom-amount').value = '';

    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'bg-primary/10');
        btn.classList.add('border-border');
    });

    document.getElementById('transfer-details').classList.add('hidden');
    document.getElementById('bitcoin-details').classList.add('hidden');
    document.getElementById('upload-status').classList.add('hidden');
}

// Donation type selection
function setDonationType(type) {
    donationType = type;

    document.getElementById('one-time-tab').classList.toggle('one-time-active', type === 'one-time');
    document.getElementById('monthly-tab').classList.toggle('one-time-active', type === 'monthly');
}

// Amount selection
function selectAmount(amount) {
    selectedAmount = amount;
    document.getElementById('custom-amount').value = '';

    document.querySelectorAll('.amount-btn').forEach(btn => {
        btn.classList.remove('bg-primary', 'text-primary-foreground');
        btn.classList.add('border-border', 'hover:border-primary');
    });

    event.target.classList.remove('border-border', 'hover:border-primary');
    event.target.classList.add('bg-primary', 'text-primary-foreground');
}

function selectCustomAmount() {
    const customAmount = parseFloat(document.getElementById('custom-amount').value);
    if (customAmount > 0) {
        selectedAmount = customAmount;

        document.querySelectorAll('.amount-btn').forEach(btn => {
            btn.classList.remove('bg-primary', 'text-primary-foreground');
            btn.classList.add('border-border', 'hover:border-primary');
        });
    }
}

// Payment method selection
function selectPaymentMethod(method) {
    selectedPaymentMethod = method;

    document.querySelectorAll('.payment-btn').forEach(btn => {
        btn.classList.remove('border-primary', 'bg-primary/10');
        btn.classList.add('border-border');
    });

    event.target.closest('.payment-btn').classList.remove('border-border');
    event.target.closest('.payment-btn').classList.add('border-primary', 'bg-primary/10');

    document.getElementById('transfer-details').classList.toggle('hidden', method !== 'transfer');
    document.getElementById('bitcoin-details').classList.toggle('hidden', method !== 'bitcoin');
}

// File upload handling
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        document.getElementById('upload-status').classList.remove('hidden');
        showToast('File uploaded successfully!', 'success');
    }
}

// Handle payment sent
function handlePaymentSent() {
    showToast('Payment confirmation sent! We will verify and update your donation status.', 'success');
    closeDonationModal();
}

// Handle donate
function handleDonate() {
    if (selectedAmount <= 0) {
        showToast('Please select a donation amount.', 'error');
        return;
    }

    if (!selectedPaymentMethod) {
        showToast('Please select a payment method.', 'error');
        return;
    }

    if (selectedPaymentMethod === 'transfer' && !document.getElementById('proof-upload').files[0]) {
        showToast('Please upload proof of payment for bank transfer.', 'error');
        return;
    }

    showToast(`Thank you for your ${donationType} donation of $${selectedAmount}!`, 'success');
    closeDonationModal();
}

// Toast notification system
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toast-container');

    const toast = document.createElement('div');
    toast.className = `p-4 rounded-lg shadow-lg max-w-sm animate-fade-in ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;

    toast.innerHTML = `
        <div class="flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="${
                    type === 'success' ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' :
                    type === 'error' ? 'M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' :
                    'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                }"></path>
            </svg>
            <span>${message}</span>
        </div>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 5000);
}

// CSS for active states
const style = document.createElement('style');
style.textContent = `
    .one-time-active {
        background-color: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
    }
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
