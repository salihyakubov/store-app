import React from 'react';

const SignIn = () => {
    return (
        <>
           <div class="min-h-screen bg-blue-400 flex justify-center items-center">
	<div class="absolute w-60 h-60 rounded-xl bg-blue-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
	</div>
	<div class="absolute w-48 h-48 rounded-xl bg-blue-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
	</div>
	<div class="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
		<div>
			<h1 class="text-3xl font-bold text-center mb-4 cursor-pointer">Авторизация</h1>
			
		</div>
		<div class="space-y-4">
			<input type="text" placeholder="Email адрес" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
			<input type="password" placeholder="Пароль" class="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
    </div>
			<div class="text-center mt-6">
				<button class="py-3 w-64 text-xl text-white bg-blue-400 rounded-2xl">Войти</button>
				<p class="mt-4 underline cursor-pointer">Забыли пароль?
				</p>
			</div>
		</div>
		<div class="w-40 h-40 absolute bg-blue-300 rounded-full top-0 right-12 hidden md:block"></div>
		<div
			class="w-20 h-40 absolute bg-blue-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
		</div>
	</div> 
        </>
    );
};

export default SignIn;