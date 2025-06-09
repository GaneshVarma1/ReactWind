import { motion } from "framer-motion";

export const DemoSection = () => {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-4 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            See ReactWind in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Watch how easy it is to build beautiful interfaces with our components
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-5xl mx-auto"
        >
          <div 
            style={{ 
              position: "relative", 
              boxSizing: "content-box", 
              maxHeight: "80vh", 
              width: "100%", 
              aspectRatio: "2.1160911094783246", 
              padding: "40px 0 40px 0" 
            }}
          >
            <iframe 
              src="https://app.supademo.com/embed/cmbpjfrnrax35sn1r8t003va7?embed_v=2" 
              loading="lazy" 
              title="Reactwind Demo" 
              allow="clipboard-write" 
              frameBorder="0" 
              allowFullScreen 
              style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%" 
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}; 