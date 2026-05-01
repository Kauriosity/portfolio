export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] py-8 px-6 text-center">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} Gurjot Kaur. All rights reserved.
      </p>
    </footer>
  );
}
