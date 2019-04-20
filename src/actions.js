export const APP_START = 'APP_START'

export function appStart() {
    console.log('action: appStart');
    return { type: APP_START }
}

