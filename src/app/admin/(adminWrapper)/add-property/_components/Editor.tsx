import Quill from "quill";
import "quill/dist/quill.snow.css";

import React, { forwardRef, useEffect, useRef, useCallback } from "react";

interface EditorProps {
  readOnly?: boolean;
  defaultValue?: any;
  onTextChange?: (delta: any, oldContents: any, source: any) => void;
  onSelectionChange?: (range: any, oldRange: any, source: any) => void;
  placeholder?: string;
  theme?: "snow" | "bubble";
  modules?: any;
  formats?: string[];
}

const Editor = forwardRef<Quill, EditorProps>(
  (
    {
      readOnly = false,
      defaultValue,
      onTextChange,
      onSelectionChange,
      placeholder = "Write something...",
      theme = "snow",
      modules = {},
      formats = [],
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const quillRef = useRef<Quill | null>(null);

    // Memoize callbacks to prevent unnecessary re-renders
    const handleTextChange = useCallback(
      (delta: any, oldContents: any, source: any) => {
        onTextChange?.(delta, oldContents, source);
      },
      [onTextChange]
    );

    const handleSelectionChange = useCallback(
      (range: any, oldRange: any, source: any) => {
        onSelectionChange?.(range, oldRange, source);
      },
      [onSelectionChange]
    );

    // Initialize Quill editor
    useEffect(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;

      // Clear any existing content
      container.innerHTML = "";

      // Create editor container
      const editorContainer = document.createElement("div");
      container.appendChild(editorContainer);

      // Default Quill configuration
      const defaultModules = {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ color: [] }, { background: [] }],
          [{ align: [] }],
          ["link", "image"],
          ["clean"],
        ],
        ...modules,
      };

      try {
        const quill = new Quill(editorContainer, {
          theme,
          placeholder,
          modules: defaultModules,
          formats:
            formats.length > 0
              ? formats
              : [
                  "header",
                  "bold",
                  "italic",
                  "underline",
                  "strike",
                  "list",
                  "bullet",
                  "color",
                  "background",
                  "align",
                  "link",
                  "image",
                  "clean",
                ],
        });

        quillRef.current = quill;

        // Set the ref for parent component
        if (ref) {
          if (typeof ref === "function") {
            ref(quill);
          } else {
            ref.current = quill;
          }
        }

        // Set default value if provided
        if (defaultValue) {
          if (typeof defaultValue === "string") {
            quill.setText(defaultValue);
          } else {
            quill.setContents(defaultValue);
          }
        }

        // Add event listeners
        quill.on("text-change", handleTextChange);
        quill.on("selection-change", handleSelectionChange);

        // Set initial read-only state
        quill.enable(!readOnly);
      } catch (error) {
        console.error("Failed to initialize Quill editor:", error);
      }

      // Cleanup function
      return () => {
        if (quillRef.current) {
          // Remove event listeners
          quillRef.current.off("text-change", handleTextChange);
          quillRef.current.off("selection-change", handleSelectionChange);
          quillRef.current = null;
        }

        // Clear the ref
        if (ref) {
          if (typeof ref === "function") {
            ref(null);
          } else {
            ref.current = null;
          }
        }

        // Clear container
        if (container) {
          container.innerHTML = "";
        }
      };
    }, [
      theme,
      placeholder,
      modules,
      formats,
      handleTextChange,
      handleSelectionChange,
      ref,
    ]);

    // Handle read-only state changes
    useEffect(() => {
      if (quillRef.current) {
        quillRef.current.enable(!readOnly);
      }
    }, [readOnly]);

    return (
      <div
        ref={containerRef}
        className="quill-editor-container"
        style={{ minHeight: "200px" }}
      />
    );
  }
);

Editor.displayName = "Editor";

export default Editor;
