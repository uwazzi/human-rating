import { PrismaClient } from '@prisma/client';

async function testConnection() {
  const prisma = new PrismaClient();
  
  try {
    // Try to connect and perform a simple query
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ Database connection successful!');
    console.log(result);
    
    // Close the connection
    await prisma.$disconnect();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error(error);
    
    // Close the connection
    await prisma.$disconnect();
    return false;
  }
}

testConnection()
  .then(success => {
    if (!success) {
      process.exit(1);
    }
  })
  .catch(error => {
    console.error(error);
    process.exit(1);
  }); 