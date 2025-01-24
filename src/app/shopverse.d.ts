/*
 * Copyright (c) 2025 - Shiny Superb Star
 * All rights reserved.
 *
 * This file is the property of Shiny Superb Star.
 * Unauthorized use, copying, or distribution is strictly prohibited.
 * Shiny Superb Star reserves the right to take legal action
 * against any person or entity who makes use of this file without the
 * express written permission of Shiny Superb Star.
 * 
 */

/**
 * HOME PAGE INTERFACES
 */
interface IShoppingCategories {
    id: string;
    title: string;
    options: IShoppingCategoryOptions[]
    description: string
}

interface IShoppingCategoryOptions {
    title: string;
    href: string;
    description: string
}

/**
 * LOGIN PAGE INTERFACES
 */

/**
 * LANGUAGE INTERFACES
 */
interface ILanguageOptions {
    id: number;
    value: string;
    label: string;
}