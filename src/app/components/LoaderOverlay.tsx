"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLoader } from "@/app/components/LoaderContext";
import Loader from "@/app/components/loader";

export default function LoaderOverlay() {
  const { loading } = useLoader();

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center loader-overlay"
        >
          <div className="flex flex-col items-center">
            <Loader />
            <p className="mt-6 text-lg font-semibold text-cyan-400">Loading...</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
