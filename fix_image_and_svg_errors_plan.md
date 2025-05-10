# Plan to Fix Image and SVG Console Errors

This document outlines the plan to address console errors related to SVG attributes and image `src` props in the e-commerce application.

## Phase 1: Information Gathering (Completed)

1.  **Read `QuickViewModal.tsx`**: Analyze the usage of the `Image` component and how product image data (`product`, `imgs`, `previews`, `activePreview`) is handled.
    *   Status: Done.
2.  **Read `EmptyCart.tsx`**: Examine SVG elements to confirm `fill-rule` and `clip-rule` attributes.
    *   Status: Done.
3.  **Read `PreviewSlider.tsx`**: Examine SVG elements based on new error report.
    *   Status: Done.

## Phase 2: Proposed Changes & Implementation Plan

### Goal 1: Correct SVG attributes in `EmptyCart.tsx` (Implemented)

*   **File:** `src/components/Common/CartSidebarModal/EmptyCart.tsx`
*   **Problem:** Invalid DOM properties `fill-rule` and `clip-rule` are used. React expects camelCase for these (i.e., `fillRule`, `clipRule`).
*   **Actions:**
    *   Locate all instances of `fill-rule` and change them to `fillRule`.
    *   Locate all instances of `clip-rule` and change them to `clipRule`.
*   **Status:** Implemented.

### Goal 2: Implement conditional rendering for the main product image in `QuickViewModal.tsx` (Implemented)

*   **File:** `src/components/Common/QuickViewModal.tsx`
*   **Problem:**
    1.  `Image is missing required "src" property: {}` (src is undefined/null or not a string/StaticImport)
    2.  `An empty string ("") was passed to the src attribute.` (src is an empty string)
*   **Actions:**
    *   Defined a constant `imageSrc` and used conditional rendering for the main image.
*   **Status:** Implemented (after initial scope correction).

### Goal 3: Address empty string `src` for thumbnail images in `QuickViewModal.tsx` (Implemented)

*   **File:** `src/components/Common/QuickViewModal.tsx`
*   **Problem:** Passing `img || ""` to the `src` prop of the thumbnail `Image` component can result in an empty string `src`.
*   **Actions:**
    *   Modified thumbnail mapping to conditionally render `Image` only if `img` is truthy.
*   **Status:** Implemented.

### Goal 4: Correct SVG attributes in `PreviewSlider.tsx`

*   **File:** `src/components/Common/PreviewSlider.tsx`
*   **Problem:** Invalid DOM properties `fill-rule` and `clip-rule` are used (similar to `EmptyCart.tsx`).
*   **Actions:**
    *   Ensure `fill-rule` is changed to `fillRule` and `clip-rule` to `clipRule` at the following lines:
        *   Line 48: `fillRule` (verify)
        *   Line 49: `clipRule` (verify)
        *   Line 69: `fill-rule` -> `fillRule`
        *   Line 70: `clip-rule` -> `clipRule`
        *   Line 89: `fill-rule` -> `fillRule`
        *   Line 90: `clip-rule` -> `clipRule`
*   **Status:** Pending.

## Phase 3: Implementation

*   Switch to a mode that allows code modifications (e.g., "Code" mode).
*   Apply the changes outlined in Goals 1, 2, 3 (Completed).
*   Apply the changes for Goal 4.

## Mermaid Diagram of the Plan (Updated)

```mermaid
graph TD
    A[Start: Analyze Console Errors] --> B{Errors Identified};
    B --> C[Plan Phase 1: Info Gathering];
    C --> D[Read QuickViewModal.tsx - Done];
    C --> E[Read EmptyCart.tsx - Done];
    C --> E2[Read PreviewSlider.tsx - Done];
    D --> F{QuickViewModal.tsx Content Acquired};
    E --> G{EmptyCart.tsx Content Acquired};
    E2 --> G2{PreviewSlider.tsx Content Acquired};
    F --> H[Plan Goal 2: Fix Main Image in QuickViewModal];
    F --> I[Plan Goal 3: Fix Thumbnail Images in QuickViewModal];
    G --> J[Plan Goal 1: Fix SVG Attributes in EmptyCart];
    G2 --> J2[Plan Goal 4: Fix SVG Attributes in PreviewSlider.tsx];
    H --> K[Implement Conditional Render for Main Image - Implemented];
    I --> L[Implement Conditional Render for Thumbnails - Implemented];
    J --> M[Correct SVG Attributes in EmptyCart - Implemented];
    J2 --> M2[Correct SVG Attributes in PreviewSlider - Pending];
    M2 --> N[Proceed to Implementation Phase];
    N --> O[Switch to Code Mode];
    O --> P[Apply Changes to EmptyCart.tsx - Done];
    P --> Q[Apply Changes to QuickViewModal.tsx - Done];
    Q --> Q2[Apply Changes to PreviewSlider.tsx];
    Q2 --> R[Verify Fixes & Conclude Task];