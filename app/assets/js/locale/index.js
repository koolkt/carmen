import { campaignEn, campaignFr } from './campaign';
import { honorComEn } from './honorcom';
import { aboutEn, aboutFr } from './about';

export const translations = {
    fr: {
        tCampaignMenuLink: 'Campagne de financement',
        tCorpDonMenuLink:'Don corporatif',
        tDonationWallButton: 'Mur des donateurs',
        tAboutMenuLink: 'Le projet',
        tHomeLightboxTitle: 'Sauvons la maison de Georges Bizet',
        tHomeLightboxP: "Campagne de financement participatif pour sauver la maison de Georges Bizet et créer le futur espace Carmen.",
        tSendButton: 'Envoyer',
        tWatchVideoButton: 'Regarder la vidéo',
        tDonateButton: 'Faites un don!',
        tDiscoverProject: 'Découvrir le projet',
        tHomeTitle: 'Sauvons la maison de Georges Bizet',
        tTheProject: 'Le projet',
        ...campaignFr,
        ...aboutFr,
    },
    en: {
        tHomeTitle: 'Lets Save the house of Georges Bizet',
        tCampaignMenuLink: 'Fundraising Campaign',
        tCorpDonMenuLink:'Corporate donation',
        tDonationWallButton: 'Donors\' wall',
        tAboutMenuLink: 'About',
        tHomeLightboxTitle: 'Lets save the House of Georges Bizet',
        tHomeLightboxP: "Crowdfunding campaign to save the house of Georges Bizet and create the space Carmen.",
        tSendButton: 'Submit',
        tWatchVideoButton: 'Watch the video',
        tDonateButton: 'Donate now!',
        tDiscoverProject: 'Discover the project',
        tTheProject: 'The project',
        ...campaignEn,
        ...honorComEn,
        ...aboutEn,
    }
};
