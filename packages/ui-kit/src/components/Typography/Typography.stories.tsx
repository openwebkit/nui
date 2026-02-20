import type { Meta, StoryObj } from "@storybook/react-vite";

// Since we don't have a specific Typography component, we'll use a wrapper div
const TypographyWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const meta = {
  title: "Design System/Typography",
  component: TypographyWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Typography showcasing HTML typography elements styled with Tailwind CSS across different screen sizes. This demonstrates how text scales and adapts on mobile, tablet, and desktop viewports.",
      },
    },
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: "text" },
  },
} satisfies Meta<typeof TypographyWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample blog content for consistency across stories
const BlogContent = ({ className = "" }: { className?: string }) => (
  <article className={`prose prose-gray max-w-none ${className}`}>
    <header className="mb-8 border-b border-gray-200 pb-6">
      <h1>The Future of Web Typography</h1>
      <p>
        Exploring modern typography trends and best practices for responsive
        design
      </p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
        <span>Published on October 25, 2025</span>
        <span>•</span>
        <span>8 min read</span>
        <span>•</span>
        <span>Design System</span>
      </div>
    </header>

    <section className="mb-8">
      <h2>Introduction to Modern Typography</h2>
      <p>
        Typography is the art and technique of arranging type to make written
        language
        <strong> legible</strong>, <em>readable</em>, and <mark>appealing</mark>{" "}
        when displayed. The arrangement of type involves selecting typefaces,
        point sizes, line lengths, line-spacing, and letter-spacing.
      </p>
      <p>
        In the digital age, responsive typography has become crucial for
        creating seamless user experiences across all device types. Let's
        explore the key principles that make typography work effectively in
        modern web design.
      </p>

      <blockquote>
        "Typography is the craft of endowing human language with a durable
        visual form."
        <cite className="block mt-2 text-sm font-semibold not-italic">
          — Robert Bringhurst
        </cite>
      </blockquote>
    </section>

    <section className="mb-8">
      <h3>Hierarchy and Scale</h3>
      <p>
        A well-defined typographic hierarchy guides readers through your content
        effortlessly. Here's how different heading levels create visual
        structure:
      </p>

      <h4>Primary Considerations</h4>
      <ul className="list-disc list-inside space-y-2 mb-4">
        <li>Font size relationships and ratios</li>
        <li>Consistent spacing and rhythm</li>
        <li>Color contrast and accessibility</li>
        <li>Responsive behavior across devices</li>
      </ul>

      <h5>Implementation Details</h5>
      <p>
        When implementing typography systems, consider using relative units like
        <code>rem</code> and <code>em</code> for better scalability and
        accessibility.
      </p>

      <h6>Technical Notes</h6>
      <p>
        Always test your typography across different screen sizes and ensure
        proper fallback fonts are specified for optimal cross-platform
        compatibility.
      </p>
    </section>

    <section className="mb-8">
      <h2>Text Formatting Examples</h2>
      <p>
        Here are various text formatting options available in modern web
        typography:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h4>Text Styles</h4>
          <p>
            <strong>Bold text</strong> for emphasis
          </p>
          <p>
            <em>Italic text</em> for subtle emphasis
          </p>
          <p>
            <u>Underlined text</u> for links or emphasis
          </p>
          <p>
            <s>Strikethrough text</s> for deletions
          </p>
          <p>
            <small>Small text</small> for fine print
          </p>
        </div>
        <div>
          <h4>Code Examples</h4>
          <p>
            Inline <code>code</code> formatting
          </p>
          <pre>
            {`function example() {
  return "Hello, World!";
}`}
          </pre>
        </div>
      </div>
    </section>

    <section className="mb-8">
      <h2>Lists and Structure</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
        <div>
          <h4>Unordered List</h4>
          <ul>
            <li>Typography fundamentals</li>
            <li>Responsive design principles</li>
            <li>Accessibility considerations</li>
            <li>Performance optimization</li>
          </ul>
        </div>

        <div>
          <h4>Ordered List</h4>
          <ol>
            <li>Plan your typography system</li>
            <li>Define the visual hierarchy</li>
            <li>Test across devices</li>
            <li>Optimize for accessibility</li>
          </ol>
        </div>
      </div>
    </section>

    <footer className="mt-12 pt-8 border-t border-gray-200">
      <p className="text-sm text-gray-500 text-center">
        This typography showcase demonstrates how text scales and adapts across
        different screen sizes.
      </p>
    </footer>
  </article>
);

// Interactive playground for testing different text elements
export const InteractivePlayground: Story = {
  name: "Interactive Playground",
  args: {
    children: null,
  },
  render: () => (
    <div className="p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Typography Elements</h2>
        <p className="text-gray-600 mb-6">
          Test different typography elements and see how they render with your
          global styles.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h3>Headings</h3>
          <div className="space-y-2">
            <h1>H1 Heading - Automatically Styled</h1>
            <h2>H2 Heading - Automatically Styled</h2>
            <h3>H3 Heading - Automatically Styled</h3>
            <h4>H4 Heading - Automatically Styled</h4>
            <h5>H5 Heading - Automatically Styled</h5>
            <h6>H6 Heading - Automatically Styled</h6>
          </div>
        </section>

        <section>
          <h3>Paragraph Styles</h3>
          <p>
            This is a regular paragraph with automatic global styling applied.
            No classes needed!
          </p>
          <p>
            Another paragraph showing consistent spacing and typography. The
            global styles handle everything.
          </p>
          <p>
            Notice how all paragraphs have consistent font size, line height,
            and spacing automatically applied through global CSS.
          </p>
        </section>

        <section>
          <h3>Text Formatting</h3>
          <div className="space-y-2">
            <p>
              <strong>Bold text</strong> and <b>b tag</b>
            </p>
            <p>
              <em>Emphasized text</em> and <i>italic text</i>
            </p>
            <p>
              <u>Underlined text</u>
            </p>
            <p>
              <s>Strikethrough text</s> and <del>deleted text</del>
            </p>
            <p>
              <mark>Highlighted text</mark>
            </p>
            <p>
              <sup>Superscript</sup> and <sub>subscript</sub>
            </p>
            <p>
              <code>Inline code</code>
            </p>
          </div>
        </section>
      </div>
    </div>
  ),
};

// Mobile view (320px - 768px)
export const MobileView: Story = {
  name: "📱 Mobile View",
  args: {
    children: null,
  },
  render: () => (
    <div className="max-w-sm mx-auto bg-white">
      <BlogContent className="p-4" />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Typography optimized for mobile devices (320px - 768px). Notice how text scales down appropriately and maintains readability on smaller screens.",
      },
    },
  },
};

// Tablet view (768px - 1024px)
export const TabletView: Story = {
  name: "📱 Tablet View",
  args: {
    children: null,
  },
  render: () => (
    <div className="max-w-3xl mx-auto bg-white">
      <BlogContent className="p-6" />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
    docs: {
      description: {
        story:
          "Typography optimized for tablet devices (768px - 1024px). Text sizes increase from mobile while maintaining good line length for reading comfort.",
      },
    },
  },
};

// Desktop view (1024px+)
export const DesktopView: Story = {
  name: "🖥️ Desktop View",
  args: {
    children: null,
  },
  render: () => (
    <div className="max-w-4xl mx-auto bg-white">
      <BlogContent className="p-8" />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story:
          "Typography optimized for desktop devices (1024px+). Larger text sizes and spacing provide comfortable reading on larger screens.",
      },
    },
  },
};

// Side-by-side comparison
export const ResponsiveComparison: Story = {
  name: "📏 Responsive Comparison",
  args: {
    children: null,
  },
  render: () => (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 p-6">
      {/* Mobile */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-3 text-center font-medium">
          Mobile (375px)
        </div>
        <div
          className="w-full max-w-[375px] mx-auto bg-white"
          style={{ fontSize: "14px" }}
        >
          <BlogContent className="p-4 scale-75 origin-top" />
        </div>
      </div>

      {/* Tablet */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-3 text-center font-medium">
          Tablet (768px)
        </div>
        <div
          className="w-full max-w-3xl mx-auto bg-white"
          style={{ fontSize: "15px" }}
        >
          <BlogContent className="p-6 scale-75 origin-top" />
        </div>
      </div>

      {/* Desktop */}
      <div className="border rounded-lg overflow-hidden">
        <div className="bg-gray-100 p-3 text-center font-medium">
          Desktop (1024px+)
        </div>
        <div className="w-full bg-white" style={{ fontSize: "16px" }}>
          <BlogContent className="p-8 scale-75 origin-top" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Side-by-side comparison showing how the same content adapts across different screen sizes. This helps visualize the responsive behavior of your typography system.",
      },
    },
  },
};

// Typography scale demonstration
export const TypographyScale: Story = {
  name: "📐 Typography Scale",
  args: {
    children: null,
  },
  render: () => (
    <div className="p-8 space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-6">Heading Scale</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <h1 className="mb-2">H1: The quick brown fox jumps</h1>
            <p className="text-sm text-gray-500">
              Default styling, typically 2rem - 4rem
            </p>
          </div>
          <div className="border-b pb-4">
            <h2 className="mb-2">H2: The quick brown fox jumps over</h2>
            <p className="text-sm text-gray-500">
              Default styling, typically 1.5rem - 3rem
            </p>
          </div>
          <div className="border-b pb-4">
            <h3 className="mb-2">
              H3: The quick brown fox jumps over the lazy
            </h3>
            <p className="text-sm text-gray-500">
              Default styling, typically 1.25rem - 2rem
            </p>
          </div>
          <div className="border-b pb-4">
            <h4 className="mb-2">
              H4: The quick brown fox jumps over the lazy dog
            </h4>
            <p className="text-sm text-gray-500">
              Default styling, typically 1.125rem - 1.5rem
            </p>
          </div>
          <div className="border-b pb-4">
            <h5 className="mb-2">
              H5: The quick brown fox jumps over the lazy dog every day
            </h5>
            <p className="text-sm text-gray-500">
              Default styling, typically 1rem - 1.25rem
            </p>
          </div>
          <div className="border-b pb-4">
            <h6 className="mb-2">
              H6: The quick brown fox jumps over the lazy dog every single day
            </h6>
            <p className="text-sm text-gray-500">
              Default styling, typically 0.875rem - 1rem
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Body Text Scale</h2>
        <div className="space-y-6">
          <div>
            <p className="text-xl leading-relaxed mb-2">
              Large body text (1.25rem): Perfect for introductory paragraphs and
              emphasized content that needs to stand out.
            </p>
            <p className="text-sm text-gray-500">text-xl class</p>
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-2">
              Large body text (1.125rem): Great for important paragraphs and
              content that should be easily readable.
            </p>
            <p className="text-sm text-gray-500">text-lg class</p>
          </div>
          <div>
            <p className="text-base leading-relaxed mb-2">
              Regular body text (1rem): The standard size for most body content,
              providing good readability and comfortable reading experience.
            </p>
            <p className="text-sm text-gray-500">text-base class (default)</p>
          </div>
          <div>
            <p className="text-sm leading-relaxed mb-2">
              Small body text (0.875rem): Suitable for secondary information,
              captions, and supporting details that don't need as much
              prominence.
            </p>
            <p className="text-sm text-gray-500">text-sm class</p>
          </div>
          <div>
            <p className="text-xs leading-relaxed mb-2">
              Extra small text (0.75rem): Used for fine print, legal text,
              timestamps, and other minimal information that needs to be present
              but not prominent.
            </p>
            <p className="text-sm text-gray-500">text-xs class</p>
          </div>
        </div>
      </section>
    </div>
  ),
};
