CREATE TABLE `posts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`content` text NOT NULL,
	`user_id` integer NOT NULL,
	`date_created` text DEFAULT (CURRENT_TIMESTAMP),
	`date_modified` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `products` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`measure` text NOT NULL,
	`points` real NOT NULL,
	`category` integer NOT NULL,
	`photo1` text,
	`photo2` text,
	`photo3` text,
	`photo4` text,
	`photo5` text,
	`photo6` text,
	`description` text,
	`headline` text,
	`user_id` integer NOT NULL,
	`date_created` text DEFAULT (CURRENT_TIMESTAMP),
	`date_modified` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`measure` text NOT NULL,
	`points` real NOT NULL,
	`category` integer NOT NULL,
	`photo1` text,
	`photo2` text,
	`photo3` text,
	`photo4` text,
	`photo5` text,
	`photo6` text,
	`description` text,
	`headline` text,
	`user_id` integer NOT NULL,
	`date_created` text DEFAULT (CURRENT_TIMESTAMP),
	`date_modified` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`points` real NOT NULL,
	`measure` text,
	`amount` real,
	`photo` text,
	`notes` text,
	`kind` text NOT NULL,
	`status` text DEFAULT 'pending' NOT NULL,
	`giver_id` integer NOT NULL,
	`getter_id` integer NOT NULL,
	`transferee_id` integer,
	`date_accepted` text,
	`date_cancelled` text,
	`date_transferred` text,
	`date_created` text DEFAULT (CURRENT_TIMESTAMP),
	`date_modified` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`giver_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`getter_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`transferee_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`codename` text NOT NULL,
	`pin` text NOT NULL,
	`password` text NOT NULL,
	`avatar` text,
	`gender` text,
	`date_of_birth` text,
	`email` text,
	`phone` text,
	`location` text,
	`date_created` text DEFAULT (CURRENT_TIMESTAMP),
	`date_modified` text DEFAULT (CURRENT_TIMESTAMP)
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_codename_unique` ON `users` (`codename`);