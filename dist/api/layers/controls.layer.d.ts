import { Page } from 'puppeteer';
import { CreateConfig } from '../../config/create-config';
import { UILayer } from './ui.layer';
export declare class ControlsLayer extends UILayer {
    page: Page;
    constructor(page: Page, session?: string, options?: CreateConfig);
    /**
     * Check if there is chat
     * @param contactId {string} id '000000000000@c.us'
     * @returns object
     */
    checkChat(contactId: string): Promise<unknown>;
    /**
     * Unblock contact
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    unblockContact(contactId: string): Promise<boolean>;
    /**
     * Block contact
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    blockContact(contactId: string): Promise<boolean>;
    /**
     * puts the chat as unread
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    markUnseenMessage(contactId: string): Promise<boolean>;
    /**
     * Deletes the given chat
     * @param chatId {string} id '000000000000@c.us'
     * @returns boolean
     */
    deleteChat(chatId: string): Promise<boolean>;
    /**
     * Archive and unarchive chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @returns boolean
     */
    archiveChat(chatId: string, option: boolean): Promise<boolean>;
    /**
     * Pin and Unpin chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @param nonExistent {boolean} Pin chat, non-existent (optional)
     * @returns object
     */
    pinChat(chatId: string, option: boolean, nonExistent?: boolean): Promise<unknown>;
    /**
     * Deletes all messages of given chat
     * @param chatId
     * @returns boolean
     */
    clearChatMessages(chatId: string): Promise<void>;
    /**
     * Deletes message all of given message id
     * @param chatId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     */
    deleteMessageAll(chatId: string, messageId: string[] | string): Promise<Object>;
    /**
     * Deletes message me of given message id
     * @param chatId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     */
    deleteMessageMe(chatId: string, messageId: string[] | string): Promise<Object>;
    /**
     * Archive and unarchive chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @returns boolean
     */
    setMessagesAdminsOnly(chatId: string, option: boolean): Promise<boolean>;
}
