import type { Meta, StoryObj } from "@storybook/react-vite";

// Wrapper component for landing page typography
const LandingPageWrapper = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={className}>{children}</div>;

const meta = {
  title: "Design System/Typography/Landing Page",
  component: LandingPageWrapper,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Typography specifically optimized for landing pages with larger display text, hero sections, and marketing copy. Demonstrates impactful sizing for conversion-focused content.",
      },
    },
  },
  argTypes: {
    children: { control: { disable: true } },
    className: { control: "text" },
  },
} satisfies Meta<typeof LandingPageWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

// Landing page hero section
const HeroSection = () => (
  <section className="bg-linear-to-br from-blue-50 to-indigo-100 py-20 px-6">
    <div className="max-w-6xl mx-auto text-center">
      <h1>
        Build Amazing
        <span className="text-blue-600 block">Products Faster</span>
      </h1>
      <p className="max-w-4xl mx-auto">
        The complete design system that helps teams create consistent, beautiful
        user experiences in record time
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
          Get Started Free
        </button>
        <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
          View Demo
        </button>
      </div>
    </div>
  </section>
);

// Features section with different typography sizes
const FeaturesSection = () => (
  <section className="py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2>Why Choose Our Platform?</h2>
        <p className="max-w-3xl mx-auto">
          Everything you need to build, scale, and maintain world-class products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">⚡</span>
          </div>
          <h3>Lightning Fast</h3>
          <p>
            Built for performance with optimized components that load instantly
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🎨</span>
          </div>
          <h3>Beautiful Design</h3>
          <p>Carefully crafted components that look great out of the box</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-2xl">🔧</span>
          </div>
          <h3>Developer Friendly</h3>
          <p>
            Simple APIs and excellent documentation to get you started quickly
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Stats section with large numbers
const StatsSection = () => (
  <section className="bg-gray-900 text-white py-20 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-white">Trusted by Developers Worldwide</h2>
        <p className="text-gray-300">
          Join thousands of teams building better products
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        <div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-blue-400 mb-2">
            50K+
          </div>
          <p className="text-gray-300">Active Users</p>
        </div>
        <div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-green-400 mb-2">
            1M+
          </div>
          <p className="text-gray-300">Components Built</p>
        </div>
        <div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-purple-400 mb-2">
            99.9%
          </div>
          <p className="text-gray-300">Uptime</p>
        </div>
        <div>
          <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-yellow-400 mb-2">
            24/7
          </div>
          <p className="text-gray-300">Support</p>
        </div>
      </div>
    </div>
  </section>
);

// CTA section with prominent text
const CTASection = () => (
  <section className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-20 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-white">Ready to Get Started?</h2>
      <p className="opacity-90">
        Join thousands of developers building amazing products with our platform
      </p>
      <button className="bg-white text-blue-600 px-12 py-6 rounded-lg text-xl font-bold hover:bg-gray-100 transition-colors">
        Start Building Today
      </button>
    </div>
  </section>
);

// Complete landing page example
export const CompleteLandingPage: Story = {
  name: "🚀 Complete Landing Page",
  args: {
    children: null,
  },
  render: () => (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "A complete landing page example showing how typography scales work together to create an effective marketing page with proper visual hierarchy.",
      },
    },
  },
};

// Typography scale for landing pages
export const LandingPageScale: Story = {
  name: "📏 Landing Page Typography Scale",
  args: {
    children: null,
  },
  render: () => (
    <div className="p-8 space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">
          Landing Page Typography Scale
        </h2>

        <div className="space-y-8">
          <div className="border-b pb-6">
            <div className="text-9xl font-bold text-gray-900 mb-2">MEGA</div>
            <p className="text-gray-600">
              text-9xl (8rem/128px) - Mega impact text
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-8xl font-bold text-gray-900 mb-2">DISPLAY</div>
            <p className="text-gray-600">
              text-8xl (6rem/96px) - Display headlines
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-7xl font-bold text-gray-900 mb-2">HERO</div>
            <p className="text-gray-600">
              text-7xl (4.5rem/72px) - Hero headlines
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-6xl font-bold text-gray-900 mb-2">
              Large Title
            </div>
            <p className="text-gray-600">
              text-6xl (3.75rem/60px) - Large section titles
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-5xl font-bold text-gray-900 mb-2">
              Section Title
            </div>
            <p className="text-gray-600">
              text-5xl (3rem/48px) - Section headlines
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-4xl font-bold text-gray-900 mb-2">
              Subsection Title
            </div>
            <p className="text-gray-600">
              text-4xl (2.25rem/36px) - Subsection headlines
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-3xl font-bold text-gray-900 mb-2">
              Card Title
            </div>
            <p className="text-gray-600">
              text-3xl (1.875rem/30px) - Card and feature titles
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-2xl font-semibold text-gray-900 mb-2">
              Subtitle
            </div>
            <p className="text-gray-600">
              text-2xl (1.5rem/24px) - Subtitles and large body text
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-xl text-gray-900 mb-2">Large Body Text</div>
            <p className="text-gray-600">
              text-xl (1.25rem/20px) - Emphasized body text
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-lg text-gray-900 mb-2">Body Text</div>
            <p className="text-gray-600">
              text-lg (1.125rem/18px) - Standard body text
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-base text-gray-900 mb-2">Regular Text</div>
            <p className="text-gray-600">
              text-base (1rem/16px) - Default text size
            </p>
          </div>

          <div className="border-b pb-6">
            <div className="text-sm text-gray-900 mb-2">Small Text</div>
            <p className="text-gray-600">
              text-sm (0.875rem/14px) - Captions and secondary text
            </p>
          </div>

          <div>
            <div className="text-xs text-gray-900 mb-2">Fine Print</div>
            <p className="text-gray-600">
              text-xs (0.75rem/12px) - Legal text and fine print
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
};

// Mobile landing page view
export const MobileLandingPage: Story = {
  name: "📱 Mobile Landing Page",
  args: {
    children: null,
  },
  render: () => (
    <div className="max-w-sm mx-auto">
      <section className="bg-linear-to-br from-blue-50 to-indigo-100 py-12 px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Build Amazing
            <span className="text-blue-600 block">Products</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Complete design system for teams
          </p>
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg text-base font-semibold">
            Get Started Free
          </button>
        </div>
      </section>

      <section className="py-12 px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Features
        </h2>
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Lightning Fast
            </h3>
            <p className="text-sm text-gray-600">Optimized for performance</p>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "Mobile-optimized landing page showing how typography scales down appropriately for smaller screens while maintaining impact.",
      },
    },
  },
};

// Desktop landing page view
export const DesktopLandingPage: Story = {
  name: "🖥️ Desktop Landing Page",
  args: {
    children: null,
  },
  render: () => (
    <div>
      <section className="bg-linear-to-br from-blue-50 to-indigo-100 py-24 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-8xl font-bold text-gray-900 mb-8 leading-tight">
            Build Amazing
            <span className="text-blue-600 block">Products Faster</span>
          </h1>
          <p className="text-3xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
            The complete design system that helps teams create consistent,
            beautiful user experiences in record time
          </p>
          <div className="flex gap-6 justify-center">
            <button className="bg-blue-600 text-white px-12 py-6 rounded-lg text-2xl font-semibold">
              Get Started Free
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-12 py-6 rounded-lg text-2xl font-semibold">
              View Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        story:
          "Desktop-optimized landing page with large, impactful typography that takes advantage of the available screen real estate.",
      },
    },
  },
};
